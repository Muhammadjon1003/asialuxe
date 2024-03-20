import React from "react";
import { DatePicker, Space } from "antd";
import "./calendar.scss";
import { useGlobalContext } from "../../../../../Context/context";

export default function Calendar() {
  const { disabledDate, disabledDateTime } = useGlobalContext();

  return (
    <div>
      <Space direction="vertical" size={12}>
        <DatePicker
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          placeholder="There"
          className="one-way-date-picker"
        />
      </Space>
    </div>
  );
}
