import { useState } from "react"

const NumberClickerButton = () => {
   const [numberOfTimesClicked, setNumber] = useState(0);


  return (
    <>
    <button className="btn btn-secondary" onClick={() => {setNumber(numberOfTimesClicked + 1)}}>
        Button clicked: {numberOfTimesClicked}
    </button>


    </>
  )
}

export default NumberClickerButton