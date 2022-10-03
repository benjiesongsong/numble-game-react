import axios from "axios";
import { useEffect, useState } from "react";

interface NumberFactProps {
  num: number;
}

function NumberFact(props: NumberFactProps): any {
  const [numberFact, setNumberFact] = useState("");
  useEffect(() => {
    console.log("hello from effect");
    fetchNumberFact(props.num).then((fact) => {
      setNumberFact(fact);
    });
  }, []);

  return <div>{numberFact}</div>;
}
async function fetchNumberFact(num: number): Promise<any> {
  const response = await axios.get(`http://numbersapi.com/${num}`);
  const data = await response.data;
  return data;
}

export { NumberFact };
