import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

function Project5() {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navbar />
        <Logo />
        <Buttons left={"/projet-4"} right={"/projet-6"} />
        <Project
          projectNumber={4}
          inline={true}
          github={"https://github.com/HuguesCtrl/salleDeBoxe"}
        />
      </div>
    </main>
  );
}
export default Project5;
