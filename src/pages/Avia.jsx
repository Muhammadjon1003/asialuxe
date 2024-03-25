import React from "react";
import AviaPageSearch from "../search-section/main-pages/AviaPageSearch";

function onChange(params) {
  console.log(params);
}

export default function Avia() {
  return (
    <div>
      <AviaPageSearch />
    </div>
  );
}
