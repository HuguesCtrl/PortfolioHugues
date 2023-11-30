import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

function Project1() {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navbar />
        <Logo />
        <Buttons left={"/"} right={"/projet-2"} />
        <Project
          projectNumber={0}
          inline={true}
          github={"https://github.com/HuguesCtrl/ProjetBooki"}
        />
      </div>
    </main>
  );
}
export default Project1;
