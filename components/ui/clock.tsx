"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  const [utcTime, setUtcTime] = useState(moment.utc().format("HH:mm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setUtcTime(moment.utc().format("HH:mm"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="flex gap-1">
      {utcTime} <b className="">UTC</b>
    </span>
  );
};

export default Clock;
