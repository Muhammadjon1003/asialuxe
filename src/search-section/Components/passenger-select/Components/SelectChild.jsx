import React from "react";

import { Select } from "antd";
import "./SelectClass.scss";
import { useGlobalContext } from "../../../../Context/context";

export default function SelectChild() {
  const { setSelectedChild } = useGlobalContext();
  const handleChange = (value) => {
    setSelectedChild(value);
  };
  return (
    <Select
      defaultValue="Add child"
      onChange={handleChange}
      options={[
        {
          label: <span>Age</span>,
          title: "Age",
          options: [
            {
              label: <span>Add Child</span>,
              value: "add-child",
            },
            {
              label: <span>Infant - up to 2 years old</span>,
              value: "infant",
            },
            ...Array.from({ length: 16 }, (_, index) => ({
              label: (
                <span>
                  {index + 2} {index + 2 <= 4 ? "year" : "years"}
                </span>
              ),
              value: `${index + 2}-year`,
            })),
          ],
        },
      ]}
    />
  );
}
