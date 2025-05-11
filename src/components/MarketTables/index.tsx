import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAssets } from "@/api";
import { Box } from "@radix-ui/themes";
import TablesSegmentedControl from "@/components/TablesSegmentedControl";
import AllMarketsTable from "@/components/AllMarketsTable";
import YourWatchlistTable from "@/components/YourWatchlistTable";
import { CryptoAsset } from "@/commonTypes";

enum View {
  All = "All",
  Saved = "Saved"
}

const MarketTables = () => {
  const [view, setView] = useState<View>(View.All);
  const [savedCoins, setSavedCoins] = useState<string[]>(
    JSON.parse(localStorage.getItem("savedCoins") || "[]")
  );

  const saveCoin = (selectedCoin: string) =>
    setSavedCoins((prevCoins) => {
      const newSavedCoins = [...prevCoins, selectedCoin];
      localStorage.setItem("savedCoins", JSON.stringify(newSavedCoins));
      return newSavedCoins;
    });

  const removeCoin = (selectedCoin: string) =>
    setSavedCoins((prevCoins) => {
      const newSavedCoins = prevCoins.filter((coin) => coin !== selectedCoin);
      localStorage.setItem("savedCoins", JSON.stringify(newSavedCoins));
      return newSavedCoins;
    });

  const { data = [] } = useQuery({
    queryKey: ["assets"],
    queryFn: getAssets
  });

  const savedAssets = savedCoins.reduce<CryptoAsset[]>((acc, coinName) => {
    const asset = data.find((asset) => asset.name === coinName);
    return asset ? [...acc, asset] : acc;
  }, []);

  return (
    <Box mb="2rem">
      <TablesSegmentedControl
        value={view}
        options={[
          { value: View.All, label: "All Markets" },
          { value: View.Saved, label: "Your Watchlist" }
        ]}
        onValueChange={(newView) => setView(newView as View)}
      />
      {view === View.All && (
        <AllMarketsTable coinsList={data} saveCoin={saveCoin} />
      )}
      {view === View.Saved && (
        <YourWatchlistTable savedCoins={savedAssets} removeCoin={removeCoin} />
      )}
    </Box>
  );
};

export default MarketTables;
