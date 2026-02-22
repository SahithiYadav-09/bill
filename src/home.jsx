import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
    

      <Link to="/administration">
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
         ADMINISTRATION
        </div>
      </Link>

     
    </div>
  );
}

export default Home;

