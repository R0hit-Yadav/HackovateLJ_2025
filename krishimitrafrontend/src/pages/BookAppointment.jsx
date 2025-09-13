import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./BookAppointment.css"; // Import CSS file

const BookAppointment = () => {
  const navigate = useNavigate();
  const [labour, setLabour] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { labourId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.labour) {
      setLabour(state.labour);
    }
  }, [state]);

  if (!labour) {
    return <div className="loading">Loading...</div>;
  }

  const dates = [
    { day: "WED", date: "4", month: "Mar" },
    { day: "THU", date: "5", month: "Mar" },
    { day: "FRI", date: "6", month: "Mar" },
    { day: "SAT", date: "7", month: "Mar" },
    { day: "SUN", date: "8", month: "Mar" },
    { day: "MON", date: "9", month: "Mar" },
    { day: "TUE", date: "10", month: "Mar" },
  ];

  const timeSlots = [
    "06:00 am",
    "07:00 am",
    "08:00 am",
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
  ];

  return (
    <div className="booking-page">
      <div className="container">
        {/* Labour Profile Card */}
        <div className="labour-card">
          <div className="image-section">
            <img
              src={labour.image}
              alt={labour.name}
              className="labour-image"
            />
          </div>
          <div className="info-section">
            <h2>{labour.name}</h2>
            <p className="qualification">
              {labour.skills} • {labour.experience} years experience
            </p>
            <p className="about">{labour.about}</p>
            <p className="fee">
              Hourly Rate: <span>${labour.rate}/hr</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="booking-section">
          <h3>Booking Slots</h3>

          {/* Date Selection */}
          <div className="date-container">
            {dates.map((date) => (
              <button
                key={date.date}
                className={`date-btn ${
                  selectedDate === date.date ? "active" : ""
                }`}
                onClick={() => setSelectedDate(date.date)}
                aria-label={`Select date ${date.date} ${date.month}`}
              >
                <span className="day">{date.day}</span>
                <span className="date">{date.date}</span>
              </button>
            ))}
          </div>

          {/* Time Selection */}
          <div className="time-container">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={`time-btn ${
                  selectedTime === time ? "active" : ""
                }`}
                onClick={() => setSelectedTime(time)}
                aria-label={`Select time ${time}`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <button
            className="book-btn"
            disabled={!selectedDate || !selectedTime}
            onClick={() => {
              if (selectedDate && selectedTime) {
                navigate("/confirmation", {
                  state: {
                    labour,
                    selectedDate,
                    selectedTime,
                  },
                });
              }
            }}
          >
            Book Labour
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;