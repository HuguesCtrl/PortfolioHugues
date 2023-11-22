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
          video={
            "https://www.youtube.com/watch?v=z-xsu2GgeUo&list=PLzaRFeot-cPVRne47YYiRu-eb3atvpth6&index=2"
          }
        />
      </div>
    </main>
  );
}
export default Project1;
