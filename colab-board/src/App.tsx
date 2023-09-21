import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import HeaderBar from "./componets/NavBar";
import ThreeCards from "./componets/ThreeCards";

function App() {
  return (
    <>
      <div>
        <HeaderBar />
        <ThreeCards />
      </div>
    </>
  );
}

export default App;
