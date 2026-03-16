import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function WorkingDays() {

  const [value, setValue] = useState("");
  const [formatted, setFormatted] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {

    const monthValue = e.target.value;
    setValue(monthValue);

    if (monthValue) {
      const [year, month] = monthValue.split("-");
      const monthNames = [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
      ];

      setFormatted(`${monthNames[parseInt(month) - 1]} ${year}`);
    } else {
      setFormatted("");
    }
  };

  const handleSubmit = () => {

    if (!value) {
      alert("Please select a month and year!");
      return;
    }

    const [year, month] = value.split("-");

    navigate("/adwup/updatewkds", {
      state: { year, month, formatted }
    });
  };

  return (

    <div style={{ padding: "20px", textAlign: "center" }}>

      <h2>ADMINISTRATION - WORKING DAYS UPDATION</h2>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent: "center"
      }}>

        <label style={{ fontWeight: 500 }}>
          Select Month and Year:
        </label>

        <input
          type="month"
          value={value}
          onChange={handleChange}
        />

      </div>

      {formatted && (
        <p>
          Selected Month: <strong>{formatted}</strong>
        </p>
      )}

      <button
        onClick={handleSubmit}
        style={{
          padding: "6px 14px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#1976d2",
          color: "white",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Submit
      </button>

      <br /><br />

      <Link to="/">Back</Link>

    </div>
  );
}

export default WorkingDays;