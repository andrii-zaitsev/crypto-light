import { useState, useEffect, useRef } from "react";
import { WifiOffIcon } from "lucide-react";
import { Flex, Text } from "@radix-ui/themes";

enum NetworkStatus {
  Online = "online",
  Offline = "fline"
}

const NetworkStatusCard = () => {
  const [status, setStatus] = useState<NetworkStatus>(NetworkStatus.Online);
  const lastUpdated = useRef(new Date());

  useEffect(() => {
    const setOnline = () => {
      lastUpdated.current = new Date();
      setStatus(() => NetworkStatus.Online);
    };
    const setOffline = () => setStatus(() => NetworkStatus.Offline);

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  if (status === NetworkStatus.Online) {
    return null;
  }

  const formattedLastUpdated = lastUpdated.current.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  return (
    <Flex
      align="center"
      justify="between"
      p="0.75rem"
      mb="1.5rem"
      style={{
        border: "1px solid #fef3c7",
        backgroundColor: "#fffbeb",
        borderRadius: "12px"
      }}
    >
      <Flex align="center">
        <WifiOffIcon width={32} height={32} color="#f59e0b" />
        <Text ml="0.5rem" style={{ color: "#b45309" }}>
          Offline
        </Text>
      </Flex>
      <Text color="gray">Last updated: {formattedLastUpdated}</Text>
    </Flex>
  );
};

export default NetworkStatusCard;
