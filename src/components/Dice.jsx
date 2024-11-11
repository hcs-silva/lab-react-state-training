import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import { useState } from "react";

const Dice = () => {
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [dice, setDice] = useState(diceEmpty);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * 6);
    setDice(diceEmpty);
    setTimeout(() => {
      setDice(diceArray[randomIndex]);
    }, 1000);
  }
  return (
    <div>
      <img src={dice} alt="" className="dice" onClick={handleClick} />
    </div>
  );
};

export default Dice;
