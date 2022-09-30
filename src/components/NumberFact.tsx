interface NumberFactProps {
  num: number;
}

function NumberFact(props: NumberFactProps) {
  return <div>the number is {props.num}</div>;
}

export { NumberFact };
