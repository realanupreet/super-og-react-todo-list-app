import useToggle from "../Hooks/useToggle";
import Person from "../Person";

const HomeComponent = () => {
  const { state: isVisible, toggle } = useToggle();
  return (
    <div>
      <h1>Home of the app</h1>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && (
        <img
          src="https://media.tenor.com/ureTfAf6B3EAAAAC/no-jerry.gif"
          alt="nah"
          style={{ width: "40vw", display: "block", margin: "0 auto" }}
        />
      )}
      <Person name="Ameen" age={34} />
    </div>
  );
};
export default HomeComponent;
