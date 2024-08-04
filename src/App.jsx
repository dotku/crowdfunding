import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl py-6">Crowdfunding</h1>
      </Link>
      <Outlet />
    </>
  );
}

export default App;
