import { Card, Heading, Text, Table, Button, Link } from "@radix-ui/themes";

const AllMarketsTable = () => {
  return (
    <Card size="3">
      <Heading as="h3" mb="0.5rem">
        Top Cryptocurrencies
      </Heading>
      <Text as="p" color="gray" mb="0.5rem">
        Market data for top cryptocurrencies
      </Text>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>24h Change</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Market Cap</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Volume(24h)</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Original source</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Bitcoin</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
            <Table.Cell>
              <Link href="https://www.coincap.io/" target="_blank">
                See more
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Ethereum</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
            <Table.Cell>
              <Link href="https://www.coincap.io/" target="_blank">
                See more
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Solana</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
            <Table.Cell>
              <Link href="https://www.coincap.io/" target="_blank">
                See more
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Ripple</Table.Cell>
            <Table.Cell>$68432.51</Table.Cell>
            <Table.Cell>2.34%</Table.Cell>
            <Table.Cell>$1.35T</Table.Cell>
            <Table.Cell>$28.77B</Table.Cell>
            <Table.Cell>
              <Link href="https://www.coincap.io/" target="_blank">
                See more
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default AllMarketsTable;
