"use client";
import React, { useState, useEffect } from "react";

const InlineCountdown = () => {
  // Updated target date and time
  const targetDate = new Date("April 3, 2025 15:00:00").getTime(); // Start of the event at 3 PM
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        {/* <h1 style={styles.title}>Countdown to Reception</h1> */}
        <p style={styles.subtitle}>April 3, 2025 | 3:00 PM to 9:00 PM</p>
      </header>
      <div style={styles.inlineCountdown}>
        {Object.entries(timeLeft).map(([label, value], index) => (
          <React.Fragment key={label}>
            <div style={styles.timeUnit}>
              <span style={styles.number}>{value}</span>
              <span style={styles.label}>{label.toUpperCase()}</span>
            </div>
            {index < Object.entries(timeLeft).length - 1 && <span style={styles.separator}>:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fef8f3", // Soft beige background
    color: "#3b3a36",
    padding: "10px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    fontFamily: "'Playfair Display', serif", // Elegant font
    color: "#6b4226", // Deep brown color
  },
  subtitle: {
    fontSize: "19px",
    fontStyle: "italic",
    fontFamily: "'Playfair Display', serif",
    fontWeight:'bold',
    color: "#9c6848",
    marginBottom:'1px',
    marginTop:'1px'
  },
  inlineCountdown: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "18px",
    color: "#3b3a36",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  timeUnit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  number: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#d94711", // Warm red color for numbers
  },
  label: {
    fontSize: "12px",
    color: "#6b4226",
    marginTop: "2px",
  },
  separator: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#6b4226",
    margin: "0 5px",
  },
};

export default InlineCountdown;
