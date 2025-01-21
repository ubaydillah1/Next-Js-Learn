import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";
import { buyIceCream } from "../redux/iceCreams/iceCreamSlice";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "fit-content",
          padding: "50px",
        }}
      >
        <h2>Number of Cakes - {numberOfCakes}</h2>
        <button
          style={{ display: "block", margin: "20px auto", padding: "10px" }}
          onClick={() => dispatch(buyCake())}
        >
          Buy Cake
        </button>
      </div>
      <div
        style={{
          margin: "auto",
          width: "fit-content",
          padding: "50px",
        }}
      >
        <h2>Number of Ice Cream - {numberOfIceCreams}</h2>
        <button
          style={{ display: "block", margin: "20px auto", padding: "10px" }}
          onClick={() => dispatch(buyIceCream())}
        >
          Buy Cake
        </button>
      </div>
    </div>
  );
};

export default HooksCakeContainer;
