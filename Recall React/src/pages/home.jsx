import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is Home Pages</p>
      <Link to="/try" className="bca">
        <button>Go to Try</button>
      </Link>
    </div>
  );
};

export default Home;
