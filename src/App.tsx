import useWindowSize from "./hooks/useWindowSize";
import { deepCopy } from "./examples/deepCopy";
import { shallowCopy } from "./examples/shallowCopy";
function App() {
  const { width, height } = useWindowSize();

  deepCopy();
  shallowCopy();

  return <div className="App"></div>;
}

export default App;
