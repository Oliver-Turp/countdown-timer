import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimeStamps }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimeStamps);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimeStamps]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown-timer">
      <div className="time-wrap">
        <span>{remainingTime.days}</span>
        <span>days</span>
      </div>
      <div className="time-wrap">
        <span className="two-numbers">{remainingTime.hours}</span>
        <span>hours</span>
      </div>
      <div className="time-wrap">
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span>minutes</span>
      </div>
      <div className="time-wrap">
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
