import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import "./TwoWayCalendar.scss";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useGlobalContext } from "../../../../../Context/context";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

export default function TwoWayCalendar() {
  const { disabledDate, disabledRangeTime } = useGlobalContext();
  return (
    <div>
      <Space style={{ width: "100%" }} direction="vertical" size={12}>
        <RangePicker
          styles={{ width: "100% !important" }}
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
        />
      </Space>
    </div>
  );
}
