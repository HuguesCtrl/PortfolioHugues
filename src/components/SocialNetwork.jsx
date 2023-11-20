function SocialNetwork() {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) =>
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
        link.addEventListener("mouseleave", () => {
          link.style.transform = "";
        });
      })
    );
  };
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.youtube.com/@huguesgraphistevideo400/videos"
          className="hover"
          target="_blank"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-youtube"></i>
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/hugues-collet-856175198/"
          className="hover"
          target="_blank"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-linkedin-in"></i>
          </li>
        </a>
        <a
          href="https://github.com/HuguesCtrl?tab=repositories"
          className="hover"
          target="_blank"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-github"></i>
          </li>
        </a>
      </ul>
    </div>
  );
}
export default SocialNetwork;
