import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import "../single-calendar/calendar";
import "./TwoWayCalendar.scss";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useGlobalContext } from "../../../../../Context/context";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

export default function TwoWayCalendar() {
  const { disabledDate, disabledRangeTime } = useGlobalContext();
  return (
    <div>
      <Space direction="vertical" size={12}>
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
        />
      </Space>
    </div>
  );
}
