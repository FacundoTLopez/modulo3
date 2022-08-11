import { useCountContext } from "../../context/countContext";
import { Add } from "../Add/Add";
import { Reset } from "../Reset/Reset";
import { Substract } from "../Substract/Substract";

const CounterDisplay = () => {
  const { state } = useCountContext();
  return <span>{state.count}</span>;
};

export const Counter = () => {
  /*const [counter, setCounter] = useState(0);
  const handleDec = () =>
    counter <= 0 ? alert("Que haces capo") : setCounter(counter - 1);
  const handleInc = () => setCounter(counter + 1);
  useEffect(() => {
    if (counter % 2 === 0 && counter) {
      alert("Es par");
    }
  }, [counter]);*/

  return (
    <div>
      <div>
        <Substract />
        <CounterDisplay/>
        <Add />
      </div>
      <Reset />
    </div>
  );
};
