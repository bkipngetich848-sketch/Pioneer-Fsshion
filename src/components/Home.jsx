import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Categories</h2>

      <div className="row">

        <div className="col-md-4">
          <div
            className="card p-3 text-center"
            onClick={() => navigate("/shoes")}
            style={{ cursor: "pointer" }}
          >
            Shoes
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card p-3 text-center"
            onClick={() => navigate("/jewelry")}
            style={{ cursor: "pointer" }}
          >
            Jewelry
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;