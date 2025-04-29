import { Card, Table } from "@radix-ui/themes";

const YourWatchlistTable = () => {
  return (
    <Card>
      <h2>Your Watchlist</h2>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>24h Change</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Market Cap</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Volume(24h)</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Ethereum</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Solana</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Solana</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Ripple</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default YourWatchlistTable;
