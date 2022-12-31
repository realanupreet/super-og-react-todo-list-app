import { React } from "react";
import useFetchCatFact from "../Hooks/useFetchCatFact";

const CatFactComponent = () => {
  const { data, refetch } = useFetchCatFact();
  return (
    <div>
      <h1>🐱CatFact🐱</h1>
      <button onClick={refetch}>generate fact</button>
      <p>{data?.fact}</p>
    </div>
  );
};
export default CatFactComponent;
