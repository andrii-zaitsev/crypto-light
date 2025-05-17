import { SegmentedControl } from "@radix-ui/themes";

export type TablesSegmentedControlProps = {
  options: { value: string; label: string }[];
  value: string;
  onValueChange: (newValue: unknown) => void;
};

const TablesSegmentedControl = ({
  options,
  value,
  onValueChange
}: TablesSegmentedControlProps) => {
  return (
    <SegmentedControl.Root
      className="view-switcher"
      value={value}
      onValueChange={onValueChange}
      mb="2rem"
      radius="large"
      variant="classic"
    >
      {options.map(({ label, value }) => (
        <SegmentedControl.Item key={value} value={value}>
          {label}
        </SegmentedControl.Item>
      ))}
    </SegmentedControl.Root>
  );
};

export default TablesSegmentedControl;
