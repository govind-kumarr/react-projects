import React from "react";
import { FaBars } from "react-icons/fa";
import { useGloablContext } from "./context";
const Home = () => {
  const data = useGloablContext();
  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">Show Modal</button>
    </main>
  );
};

export default Home;
