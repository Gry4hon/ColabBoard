import "./NavBar.css";
import colabLogo from "./assets/ColabBoardLogo.png";
import "bootstrap/dist/css/bootstrap.css";

function HeaderBar() {
  return (
    <>
      <div className="header-container sticky-top">
        <div className="nav-items">
          <img
            src={colabLogo}
            alt="ColabBoard's logo which is a black C with a yellow lowercase b over it"
          />
          <p>Index</p>
          <p>Create Column</p>
          <p>About</p>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
