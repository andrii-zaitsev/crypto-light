import { SegmentedControl } from "@radix-ui/themes";

const TablesSegmentedControl = () => {
  return (
    <SegmentedControl.Root defaultValue="All Markets">
      <SegmentedControl.Item value="All Markets">
        All Markets
      </SegmentedControl.Item>
      <SegmentedControl.Item value="Your Watchlist">
        Your Watchlist
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};

export default TablesSegmentedControl;
