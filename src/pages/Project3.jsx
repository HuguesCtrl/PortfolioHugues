import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

function Project3() {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navbar />
        <Logo />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
        <Project
          projectNumber={2}
          github={"https://github.com/HuguesCtrl/ProjetKasa"}
        />
      </div>
    </main>
  );
}
export default Project3;
