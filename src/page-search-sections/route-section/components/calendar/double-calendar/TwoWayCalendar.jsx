import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import "../single-calendar/calendar";
import "./TwoWayCalendar.scss";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
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
const disabledRangeTime = (_, type) => {
  if (type === "start") {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
const TwoWayCalendar = () => (
  <Space direction="vertical" size={12}>
    <RangePicker disabledDate={disabledDate} disabledTime={disabledRangeTime} />
  </Space>
);
export default TwoWayCalendar;
