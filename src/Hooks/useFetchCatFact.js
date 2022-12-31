import { useQuery } from "@tanstack/react-query";

const useFetchCatFact = () => {
  const formy = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data;
  };
  const { data, refetch } = useQuery(["cat"], formy);
  return { data, refetch };
};
export default useFetchCatFact;
