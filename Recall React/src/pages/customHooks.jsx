import useLocalStorage from "../customHooks/useLocalStorage";
import useUpdateLogger from "../customHooks/useUpdateLogger";

const CustomHooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CustomHooks;
