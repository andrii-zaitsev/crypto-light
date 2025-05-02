import { useState } from "react";
import { Box } from "@radix-ui/themes";
import TablesSegmentedControl from "@/components/TablesSegmentedControl";
import AllMarketsTable from "@/components/AllMarketsTable";
import YourWatchlistTable from "@/components/YourWatchlistTable";

enum View {
  All = "All",
  Saved = "Saved"
}

const MarketTables = () => {
  const [view, setView] = useState<View>(View.All);
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
      {view === View.All && <AllMarketsTable />}
      {view === View.Saved && <YourWatchlistTable />}
    </Box>
  );
};

export default MarketTables;
