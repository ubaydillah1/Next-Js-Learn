import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/fetchData/fechDataSlice";

const FetchDataContainer = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.fetchData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "fit-content",
        paddingBottom: "100px",
      }}
    >
      <button onClick={() => dispatch(fetchUsers())}>FETCH DATA</button>
      <h2>User List:</h2>
      {users.length === 0 && <div>No data here</div>}
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchDataContainer;
