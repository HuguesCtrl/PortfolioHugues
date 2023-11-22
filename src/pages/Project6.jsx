import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

function Project6() {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navbar />
        <Logo />
        <Buttons left={"/projet-5"} right={"/contact"} />
        <Project
          projectNumber={5}
          inline={true}
          github={"https://github.com/HuguesCtrl/Immobilier"}
        />
      </div>
    </main>
  );
}
export default Project6;
