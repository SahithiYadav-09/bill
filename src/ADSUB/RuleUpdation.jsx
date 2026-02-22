import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RuleUpdation() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleFetch = () => {
  if (!value) {
    alert("Please select a rule first");
    return;
  }
navigate(`/darup/${value}`);
  
      
  
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>ADMINISTRATION - RULE UPDATION</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <label style={{ fontWeight: 500 }}>Select Rule:</label>
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ padding: "6px 10px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value=""></option>
          <option value="DA">DA</option>
          <option value="HRA">HRA</option>
          <option value="RELIEF">RELIEF</option>
        </select>

        <button
          style={{
            padding: "6px 14px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#1976d2",
            color: "white",
            cursor: "pointer"
            
          }}
           onClick={handleFetch}
        >
          Fetch
        </button>
      </div>

      <br/><br/>
      <Link to="/">Back</Link>
    </div>
  );
}

export default RuleUpdation;