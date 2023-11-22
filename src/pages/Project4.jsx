import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

function Project4() {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navbar />
        <Logo />
        <Buttons left={"/projet-3"} right={"/projet-5"} />
        <Project
          projectNumber={3}
          video={
            "https://www.youtube.com/watch?v=zBnXjPTXW0A&list=PLzaRFeot-cPVRne47YYiRu-eb3atvpth6&index=7"
          }
          github={"https://github.com/HuguesCtrl/ProjetMonVieuxGrimoire"}
        />
      </div>
    </main>
  );
}
export default Project4;
