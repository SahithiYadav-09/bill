import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>ADMINISTRATION - RULE UPDATION - RELIEF</h2>
      <Link to="/"> 
        <div  style={{ border: "1px solid WHITE", padding: "10px", margin: "10px 0" }}>
     ADD NEW RECORD</div></Link><center>
<table border="1" cellpadding="8" cellspacing="0" >
  <thead>
    <tr>
      <th>SNO</th>
      <th>Amount</th>
      <th>Effective Date</th>
      <th>Transaction Date</th>
      <th>Remarks</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   <tr></tr>
  </tbody>
</table></center>
      <Link to="/">Back</Link>
    </div>
  );
}

export default About;