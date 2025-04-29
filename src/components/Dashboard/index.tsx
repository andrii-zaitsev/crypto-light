import MarketTables from "@/components/MarketTables";
import MarketSentimentCard from "@/components/MarketSentimentCard";
import MarketOverviewCard from "@/components/MarketOverviewCard";

const Dashboard = () => {
  return (
    <div>
      <div>logo</div>
      <div>
        <MarketSentimentCard />
        <MarketOverviewCard />
      </div>
      <MarketTables />
    </div>
  );
};

export default Dashboard;
