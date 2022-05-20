import { useAppContext } from "./context/AppContext";

const App = () => {
  const { state, dispacth } = useAppContext();

  return (
    <div>
      <h1>
        Learn Hooks State Management - <code>useReducer & useContext</code> +
        Context API
      </h1>
      <div>{state.theme}</div>
      <button onClick={() => dispacth({ type: "changeTheme" })}>Change</button>
    </div>
  );
};

export default App;
