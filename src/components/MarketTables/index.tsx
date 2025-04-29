import TablesSegmentedControl from "@/components/TablesSegmentedControl";
import AllMarketsTable from "@/components/AllMarketsTable";
import YourWatchlistTable from "@/components/YourWatchlistTable";

const MarketTables = () => {
  return (
    <div>
      <TablesSegmentedControl />
      <AllMarketsTable />
      <YourWatchlistTable />
    </div>
  );
};

export default MarketTables;
