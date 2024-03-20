import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "./calendar.scss";

dayjs.extend(customParseFormat);
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

const disabledDate = (current) => {
  return current && current < dayjs().endOf("day");
};

const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

const Calendar = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      placeholder="There"
      className="one-way-date-picker"
    />
  </Space>
);
export default Calendar;
