import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bodoni text-gold">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[8px] uppercase tracking-tighter text-cream/40">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-6">
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className="text-gold/30 text-xl mt-1">:</span>
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <span className="text-gold/30 text-xl mt-1">:</span>
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;
