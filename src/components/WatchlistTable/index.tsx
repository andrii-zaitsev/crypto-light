import {
  Card,
  Heading,
  Text,
  Table,
  Link,
  Button,
  Flex
} from "@radix-ui/themes";
import { ArrowUpRight } from "lucide-react";
import DayPriceChangeText from "@/components/DayPriceChangeText";
import { CryptoAsset } from "@/commonTypes";

export type WatchlistTableProps = {
  watchlistAssets: CryptoAsset[];
  removeFromWatchlist: (selectedCoin: string) => void;
};

const WatchlistTable = ({
  watchlistAssets,
  removeFromWatchlist
}: WatchlistTableProps) => {
  return (
    <Card size="3">
      <Heading as="h3" mb="0.5rem">
        Your Watchlist
      </Heading>
      {watchlistAssets.length > 0 ? (
        <>
          <Text as="p" color="gray" mb="0.5rem">
            Cryptocurrencies you're tracking. All data saved locally in your
            browser.
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
              {watchlistAssets.map(
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
                            <ArrowUpRight size="1rem" strokeWidth={1.1} />
                          </Flex>
                        </Link>
                      </Flex>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        color="red"
                        variant="ghost"
                        onClick={() => removeFromWatchlist(name)}
                      >
                        Remove
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table.Root>
        </>
      ) : (
        <Text color="gray">You do not track any cryptocurrencies.</Text>
      )}
    </Card>
  );
};

export default WatchlistTable;
