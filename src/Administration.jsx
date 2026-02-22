
import { Link, Outlet } from "react-router-dom";

function Administration() {
  return (
    <div>
      <h2>ADMINISTRATION</h2>
       
      <Link to="/adrup"> 
        <div  style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      Rule Updation</div></Link>
      <Link to="/">
        <div  style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      Debit Report with Net Amount Less Than Zero</div></Link>
      <Link to="/adwup">
        <div  style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      Working Days Updation</div></Link>
      <Link to="/">
        <div  style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      Remove Bill No</div></Link>
      <Link to="/">
        <div  style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      Remove DV NO</div></Link>
      <Link to="/">
        <div  style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      Mayur Punkh Data</div></Link>
    </div>
  );
}

export default Administration;