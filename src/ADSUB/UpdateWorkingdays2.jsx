
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function UpdateWorkingDays() {

  const location = useLocation();
  const { year, month, formatted } = location.state;

  const [totalDays, setTotalDays] = useState("");
  const [workingDays, setWorkingDays] = useState("");

  useEffect(() => {

    axios.get(
      `http://localhost:8080/workingdays/calculate?year=${year}&month=${month}`
    )
    .then(response => {

      setTotalDays(response.data.totalDays);

      // Default working days from backend (holidays removed)
      setWorkingDays(response.data.noOfWorkingDays);

    })
    .catch(error => {
      console.error(error);
      alert("Error fetching data");
    });

  }, [year, month]);


  const handleInsert = async () => {
    const monthYear=`${year}-${month}-01`;

    const data = {
      monthYear: monthYear,
      totalDays: totalDays,
      noOfWorkingDays: workingDays
    };

    try {

      await axios.post(
        "http://localhost:8080/workingdays/save",
        data
      );

      alert("Record inserted successfully");

    } catch (error) {

      console.error(error);
      alert("Error inserting record");

    }

  };

  return (

    <div style={{ padding: "20px", textAlign: "center" }}>

     <h2>ADMINISTRATION - WORKING DAYS UPDATION</h2>

      <br/>

      <div>

        <label>Month-Year :  </label>

        <input
          type="text"
          value={formatted}
          readOnly
        />

      </div>

      <br/>

      <div>

        <label>Total Number of Days :  </label>

        <input
          type="number"
          value={totalDays}
          readOnly
        />

      </div>

      <br/>

      <div>

        <label>Working Days :  </label>

       <input
          type="number" min="0" max="28"
          value={workingDays}
          onChange={(e) => setWorkingDays(e.target.value)}
        />

      </div>

      <br/>

      <button
        onClick={handleInsert}
        style={{
          padding: "6px 14px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer"
        }}
      >
        Insert
      </button>

    </div>
  );
}

export default UpdateWorkingDays;