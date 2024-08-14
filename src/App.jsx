import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
}

export default App;
