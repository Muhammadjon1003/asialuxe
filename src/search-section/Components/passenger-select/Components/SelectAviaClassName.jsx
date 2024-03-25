import React, { useState } from "react";
import { Select } from "antd";
import "./SelectClass.scss";
import { useGlobalContext } from "../../../../Context/context";

export default function SelectAviaClassName() {
  const { setSelectedClass } = useGlobalContext();
  const handleChange = (value) => {
    setSelectedClass(value);
    console.log(value);
  };
  return (
    <Select
      defaultValue="Economy class"
      onChange={handleChange}
      options={[
        {
          label: <span>Class</span>,
          title: "class",
          options: [
            {
              label: <span>Economy class</span>,
              value: "economy-class",
            },
            {
              label: <span>Bussiness class</span>,
              value: "bussiness-class",
            },
          ],
        },
      ]}
    />
  );
}
