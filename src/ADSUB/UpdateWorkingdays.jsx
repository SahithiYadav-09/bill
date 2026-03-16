import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Upwkds() {
  const location = useLocation();
  const { year, month, formatted } = location.state;
  const [totalDays, setTotalDays] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [records, setRecords] = useState([]);


  // Fetch data from backend
  useEffect(() => {

    axios.get("http://localhost:8080/workingdays/all")
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error(error);
        alert("Error fetching data from backend");
      });

  }, []);
  const fetchAllRecords = () => {
    axios
      .get("http://localhost:8080/workingdays/all")
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching all records");
      });
  };

  return (

    <div>

      <h2>ADMINISTRATION - WORKING DAYS UPDATION</h2>
<center>
    <Link 
  to="/adwup/updatewkds/up2"
  state={{ year, month, formatted }}
>
        <div style={{
          border: "1px solid white",
          padding: "10px",
          margin: "10px 0",
          width: "200px",
          cursor: "pointer"
        }}>
          ADD NEW RECORD
        </div>
      </Link></center>

      <center>

        <table border="1" cellPadding="8" style={{ margin: "20px auto" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Month-Year</th>
              <th>Total Days</th>
              <th>Working Days</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, index) => (
              <tr key={rec.monthYear}>
                <td>{index + 1}</td>
                <td>{new Date(rec.monthYear).toLocaleString('en-US', { month: 'short', year: 'numeric' }).toUpperCase().replace(' ', '-')}</td>
                <td>{rec.totalDays}</td>
                <td>{rec.noOfWorkingDays}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </center>

      <br />

      <Link to="/">Back</Link>

    </div>

  );
}

export default Upwkds;

