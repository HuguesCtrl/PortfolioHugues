import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

function Project2() {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navbar />
        <Logo />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
        <Project
          projectNumber={1}
          github={"https://github.com/HuguesCtrl/ProjetSophieBluel"}
          video={
            "https://www.youtube.com/watch?v=JcCjPOpZRIw&list=PLzaRFeot-cPVRne47YYiRu-eb3atvpth6&index=3&t=5s"
          }
        />
      </div>
    </main>
  );
}
export default Project2;
