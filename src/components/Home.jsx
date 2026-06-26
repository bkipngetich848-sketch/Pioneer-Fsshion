import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Categories</h2>

      <div className="row">

        <button
          className="btn btn-warning btn-lg"
          onClick={() => navigate("/signup")}
        >
          Explore Our Services
        </button>
        <div className="col-md-4">
         
        </div>


        <div className="exploresec">
         
        </div>



      </div>


      
    </div>
  );
};

export default Home;