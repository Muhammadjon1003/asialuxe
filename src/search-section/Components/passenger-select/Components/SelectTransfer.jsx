import React, { useState } from "react";
import { Select } from "antd";
import "./SelectClass.scss";

export default function SelectTransfer() {
  const [classTicket, setClassTicket] = useState("");
  const handleChange = (value) => {
    setClassTicket(value);
    console.log(classTicket);
  };
  return (
    <Select
      defaultValue="Transfer"
      onChange={handleChange}
      options={[
        {
          label: <span>Transfer</span>,
          title: "Transfer",
          options: [
            {
              label: <span>Без трансфера</span>,
              value: "without-transfer",
            },
            {
              label: <span>Group transfer</span>,
              value: "group-transfer",
            },
            {
              label: <span>Indian transfer</span>,
              value: "indian-transfer",
            },
          ],
        },
      ]}
    />
  );
}
