interface NumberInfoProps {
  number: number;
  color: string;
  setCount: any;
}

function NumberInfo({ setCount, number, color }: NumberInfoProps) {
  function addFive() {
    setCount(number + 5);
  }
  return (
    <div>
      <p>
        the number is {number} the color is {color}
      </p>
      <ul>
        <li>This number is {number % 2 === 0 ? "even" : "odd"}</li>
        <li>This number squared is {number * number} </li>
      </ul>
      <button onClick={addFive}>+ 5</button>
    </div>
  );
}

export { NumberInfo };
