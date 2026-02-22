
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function WorkingDays() {
  const [value, setValue] = useState("");
  const [formatted, setFormatted] = useState("");

  const handleChange = (e) => {
    const monthValue = e.target.value;
    setValue(monthValue);

    if (monthValue) {
      const [year, month] = monthValue.split("-");
      const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      setFormatted(`${monthNames[parseInt(month, 10) - 1]} ${year}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>ADMINISTRATION - WORKING DAYS UPDATION</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
        <label style={{ fontWeight: 500 }}>Current Month and year:</label>
        <input type="month" value={value} onChange={handleChange} />
      </div>

      {formatted && <p>Selected Month: {formatted}</p>}

      <br/>
      <button style={{
        padding: "6px 14px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#1976d2",
        color: "white",
        cursor: "pointer"
      }}>
        Submit
      </button>

      <br/><br/>
      <Link to="/">Back</Link>
    </div>
  );
}

export default WorkingDays;