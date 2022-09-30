interface WinningScreenProps {
  resetGame: () => void;
}

function WinningScreen(props: WinningScreenProps) {
  return (
    <>
      <p>You Win!</p>
      <button onClick={props.resetGame}>Play Again?</button>
    </>
  );
}

export { WinningScreen };
