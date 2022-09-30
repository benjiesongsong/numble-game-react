import { ReactElement, useState } from "react";
import { WinningScreen } from "./WinningScreen";
import { LosingScreen } from "./LosingScreen";
import { getRandomPossibleOption } from "../helpers/getRandomPossibleOption";
import { getRandomWinningNumber } from "../helpers/getRandomWinningNumber";
import { NumberFact } from "./NumberFact";

function App(): ReactElement {
  // const [currentNumber, setCurrentNumber] = useState(0);
  const [targetNumber, setTargetNumber] = useState(randomNumber());
  const [historyLog, setHistoryLog] = useState<string[]>([]);
  const [numberHistory, setNumberHistory] = useState<number[]>([0]);
  const currentNumber = numberHistory[numberHistory.length - 1];
  if (currentNumber === targetNumber) {
    return <WinningScreen resetGame={resetGame} />;
  }

  if (currentNumber > targetNumber) {
    return <LosingScreen quitGame={quitGame} resetGame={resetGame} />;
  }

  function randomNumber() {
    const random = Math.random() * 100;
    const targetNumber = Math.floor(random);
    return targetNumber;
  }

  function resetGame() {
    setNumberHistory([0]);
    setHistoryLog([]);
    setTargetNumber(randomNumber());
  }

  function undoClick() {
    setNumberHistory(numberHistory.slice(0, -1));
    setHistoryLog(historyLog.slice(0, -1));
  }

  function quitGame() {
    window.close();
  }

  function addThree() {
    const newNumber = currentNumber + 3;
    setNumberHistory([...numberHistory, newNumber]);
    setHistoryLog([
      ...historyLog,
      `You added 3 to ${currentNumber} to get ${newNumber}`,
    ]);
  }

  function multiplyByTwo() {
    const newNumber = currentNumber * 2;
    setNumberHistory([...numberHistory, newNumber]);
    setHistoryLog([
      ...historyLog,
      `You multiplied ${currentNumber} by 2 to get ${newNumber}`,
    ]);
  }

  function squared() {
    const newNumber = currentNumber * currentNumber;
    setNumberHistory([...numberHistory, newNumber]);
    setHistoryLog([
      ...historyLog,
      `You squared ${currentNumber} to get ${newNumber}`,
    ]);
  }
  return (
    <>
      <h1>NUMBDLE</h1>
      <h2>Current Number: {currentNumber}</h2>
      <h2>Target number: {targetNumber}</h2>
      <h3>
        Random Fact of number:
        <NumberFact num={1} />
      </h3>
      <ul>
        {historyLog.map((historyLog, index) => {
          return <li key={index}>{historyLog}</li>;
        })}
      </ul>
      <button onClick={addThree}>+ 3</button>
      <button onClick={multiplyByTwo}>x 2</button>
      <button onClick={squared}>^2</button>
      <br />
      <button onClick={resetGame}>Reset</button>
      <button onClick={undoClick}>Undo</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        <i>Any suggestions? Don't email me.</i>
      </p>
    </>
  );
}

export { App };
