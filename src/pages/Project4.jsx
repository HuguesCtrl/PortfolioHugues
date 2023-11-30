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
          github={"https://github.com/HuguesCtrl/ProjetMonVieuxGrimoire"}
        />
      </div>
    </main>
  );
}
export default Project4;
