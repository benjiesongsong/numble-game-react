interface LosingScreenProps {
  resetGame: () => void;
  quitGame: () => void;
}

function LosingScreen(props: LosingScreenProps) {
  return (
    <>
      <h1>You lose, LOSER....</h1>
      <button onClick={props.resetGame}>Play Again?</button>
      <br />
      <button onClick={props.quitGame}>
        I'm too dumb, just quit this trash game.
      </button>
    </>
  );
}

export { LosingScreen };
