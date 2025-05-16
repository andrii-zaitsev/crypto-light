import {
  Card,
  Heading,
  Text,
  Table,
  Link,
  Flex,
  Button
} from "@radix-ui/themes";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import DayPriceChangeText from "../PriceChangeText";
import { CryptoAsset } from "@/commonTypes";

type AllMarketsTableProps = {
  coinsList: CryptoAsset[];
  savedCoins: string[];
  saveCoin: (selectedCoin: string) => void;
};

const AllMarketsTable = ({
  coinsList,
  savedCoins,
  saveCoin
}: AllMarketsTableProps) => {
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
            <Table.ColumnHeaderCell>Rank</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>24h Change</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Market Cap</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Volume(24h)</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Original source</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {coinsList.map(
            ({
              rank,
              name,
              priceUsd,
              changePercent24Hr,
              marketCapUsd,
              volumeUsd24Hr,
              explorer
            }) => (
              <Table.Row key={name}>
                <Table.Cell>{rank}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(Number(priceUsd))}
                </Table.Cell>
                <Table.Cell>
                  <DayPriceChangeText value={changePercent24Hr} />
                </Table.Cell>
                <Table.Cell>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    notation: "compact"
                  }).format(Number(marketCapUsd))}
                </Table.Cell>
                <Table.Cell>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    notation: "compact"
                  }).format(Number(volumeUsd24Hr))}
                </Table.Cell>
                <Table.Cell>
                  <Flex align="center">
                    <Link
                      href={explorer || "https://www.coincap.io/"}
                      target="_blank"
                    >
                      <Flex align="center">
                        <Text>See more</Text>
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Flex>
                </Table.Cell>
                <Table.Cell>
                  {savedCoins.includes(name) ? (
                    <Text style={{ fontStyle: "italic" }}>
                      Added to watchlist
                    </Text>
                  ) : (
                    <Button variant="ghost" onClick={() => saveCoin(name)}>
                      Add to watchlist
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default AllMarketsTable;
