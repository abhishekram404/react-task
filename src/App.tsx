import useWindowSize from "./hooks/useWindowSize";
import { deepCopy } from "./examples/deepCopy";
import { shallowCopy } from "./examples/shallowCopy";
import Reconciliation from "./components/Reconciliation";
import ReconciliationFix from "./components/ReconciliationFix";
function App() {
  const { width, height } = useWindowSize();

  deepCopy();
  shallowCopy();

  return (
    <div className="App">
      <ReconciliationFix />
    </div>
  );
}

export default App;
