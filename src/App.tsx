import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  console.log(width, height);
  return <div className="App"></div>;
}

export default App;
