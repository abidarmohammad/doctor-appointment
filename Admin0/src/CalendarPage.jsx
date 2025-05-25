import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, parseISO } from "date-fns";

const appointments = [
  { id: 1, doctor: "Doc1", date: "2025-04-01", time: "8:00 - 9:30" },
  { id: 2, doctor: "Doc5", date: "2025-04-01", time: "10:30 - 12:00" },
  { id: 3, doctor: "Doc1", date: "2025-04-02", time: "14:30 - 16:00" },
];

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  let day = startDate;
  let days = [];

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
      <div className="grid grid-cols-7 border">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="border p-2 text-center font-bold">{day}</div>
        ))}
        {days.map((day) => (
          <div key={day} className="border p-4 h-24 relative">
            <div className="text-sm font-bold">{format(day, "d")}</div>
            {appointments
              .filter((appt) => isSameDay(parseISO(appt.date), day))
              .map((appt) => (
                <div key={appt.id} className="text-xs bg-blue-200 p-1 rounded mt-1">
                  {appt.doctor}: {appt.time}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
