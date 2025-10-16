import React from "react";

const Filter = ({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) => {
  return (
    <div style={{ margin: "1rem", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <input
        type="number"
        placeholder="Min rating"
        value={rateFilter}
        onChange={(e) => setRateFilter(Number(e.target.value))}
        style={{ padding: "0.5rem", width: "100px" }}
      />
    </div>
  );
};

export default Filter;
