import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl py-6">Crowdfunding</h1>
      <Outlet />
    </>
  );
}

export default App;
