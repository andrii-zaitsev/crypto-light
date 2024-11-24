import { useQuery } from "@tanstack/react-query";
import { getAssets } from "@/api/api";

const SearchTickers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["assets"],
    queryFn: getAssets
  });
  console.log({ data, isLoading });
  return <h1>1</h1>;
};

export default SearchTickers;
