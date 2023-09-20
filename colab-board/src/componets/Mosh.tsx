import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function MoshTutorialStuff() {
  //   //The map function (for loop)
  //   const vechicleTypes = ["plane", "trains", "trucks", "cars"];
  //   return (
  //     <>
  //       <h1>Vechicles</h1>
  //       <ul>
  //         {vechicleTypes.map((vechicle) => (
  //           <li key={vechicle}>{vechicle}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //
  //   //conditional rendering
  //   let name = "";
  //   const checkForName =
  //     name === "" ? <h1>Hello User</h1> : <h1>Hello {name}</h1>;
  //
  //   const checkForName = (name) => {
  //        return name === "" ? <h1>Hello User</h1> : <h1>Hello {name}</h1>;
  //    }
  //   return <>{checkForName}</>;
  //   return <>{checkForName({name})}</>;
  //
  //click events and hooks
  const vechicleTypes = ["plane", "trains", "trucks", "cars"];

  //Hooks are kinda like getters and setters lol
  const [selectedRow, setSelectedRow] = useState(0);

  const checkSelectedRow = (index: number) => {
    return selectedRow === index ? "list-group-item active" : "list-group-item";
  };

  return (
    <>
      <h1>Vechicles</h1>
      <ul className="list-group">
        {vechicleTypes.map((vechicle, index) => (
          <li
            className={checkSelectedRow(index)}
            key={vechicle}
            onClick={() => {
              setSelectedRow(index);
            }}
          >
            {vechicle}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoshTutorialStuff;
