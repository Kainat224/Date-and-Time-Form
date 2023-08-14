import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers";
import "./App.css";

const DateNTimePicker = () => {
  const today = dayjs();
  const todayStartOfTheDay = today.startOf("day");
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="dateTimeStyling">
          <DatePicker label={"Date"} className="datepicker" />
          <TimePicker defaultValue={todayStartOfTheDay} label={"Time"} />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default DateNTimePicker;
