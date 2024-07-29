import Count from "./Count";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  return (
    <div className="card">
      <Title />
      <Count number={5} size="lg" />
      <ResetButton />
      <CountButton />
    </div>
  );
}
