import "./component-styles/NavBar.css";
import colabLogo from "./component-assets/ColabBoardLogo.png";
import userPic from "./component-assets/NewUser.png";
import "bootstrap/dist/css/bootstrap.css";

function HeaderBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand-custom" href="#">
            <img
              src={colabLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            ColabBoard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-link-custom">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Board
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Boards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="user-info justify-content-end navbar-collapse collapse">
            <a href="">
              <img src={userPic} className="d-inline-block align-top" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderBar;
