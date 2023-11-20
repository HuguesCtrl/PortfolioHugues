import { useEffect } from "react";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";

function Home() {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navbar />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>Hugues Collet</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
}
export default Home;
