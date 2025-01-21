/* eslint-disable react/prop-types */
import { buyCake } from "../redux/cakes/cakeSlice";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div
      style={{
        margin: "auto",
        width: "fit-content",
        padding: "50px",
      }}
    >
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button
        style={{ display: "block", margin: "20px auto", padding: "10px" }}
        onClick={props.buyCake}
      >
        Buy Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
