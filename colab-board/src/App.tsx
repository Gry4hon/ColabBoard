//import Nav from "./componets/NavBar";
import "bootstrap/dist/css/bootstrap.css";

import Alert from "./componets/Alert";
import ButtonComp from "./componets/ButtonComp";
import { useState } from "react";
//import Tutorial from "./componets/Mosh";
//import NumberClickerButton from "./componets/NumberClickerButton";
//import Practice from "./componets/PropPractice"

function App() {
  /*
  const head = "War of Worms!";


  const getActionWord = (actionWord: string) => {
    console.log("THE ACTION WORD IS: " + actionWord);
  }



  const anotherButtonPressed = () => {
    alert("You pressed the other button!");
  }
  */

  const [alertState, setAlertState] = useState(false);


  return (
    <>
      <div>
        {<Alert /> && alertState}
        <ButtonComp onButtonPressed={() => setAlertState(true)}> You Just Won $$$</ButtonComp>
      </div>
    </>
  );
}

export default App;
