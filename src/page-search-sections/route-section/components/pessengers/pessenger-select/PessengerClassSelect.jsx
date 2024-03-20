import React from "react";
import { Select } from "antd";
import "./PessagerSelect.scss";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const PessengerClassSelect = () => (
  <Select
    defaultValue="Economy class"
    style={{
      width: 200,
    }}
    onChange={handleChange}
    options={[
      {
        label: <span>class</span>,
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
export default PessengerClassSelect;
