import useWindowSize from "./hooks/useWindowSize";
import { deepCopy } from "./examples/deepCopy";
import { shallowCopy } from "./examples/shallowCopy";
import Reconciliation from "./components/Reconciliation";
import ReconciliationFix from "./components/ReconciliationFix";
import User from "./components/User";
import Profile from "./components/Profile";
function App() {
  const { width, height } = useWindowSize();

  deepCopy();
  shallowCopy();

  return (
    <div className="App">
      <User userId={"1"}>
        <Profile />
      </User>
    </div>
  );
}

export default App;
