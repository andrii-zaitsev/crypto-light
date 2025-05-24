import { motion } from "framer-motion";
import { Flex } from "@radix-ui/themes";
import { Sentiment } from "@/commonTypes";

const lights = [
  {
    sentiment: Sentiment.Bad,
    activeColor: "#ef4444",
    inactiveColor: "rgb(127, 29, 29, 0.3)",
    boxShadowAnimation: [
      "0 0 0 0 rgba(239, 68, 68, 0)",
      "0 0 0 20px rgba(239, 68, 68, 0.3)",
      "0 0 0 0 rgba(239, 68, 68, 0)"
    ]
  },
  {
    sentiment: Sentiment.Neutral,
    activeColor: "#eab308",
    inactiveColor: "rgb(113, 63, 18, 0.3)",
    boxShadowAnimation: [
      "0 0 0 0 rgba(234, 179, 8, 0)",
      "0 0 0 20px rgba(234, 179, 8, 0.3)",
      "0 0 0 0 rgba(234, 179, 8, 0)"
    ]
  },
  {
    sentiment: Sentiment.Good,
    activeColor: "#22c55e",
    inactiveColor: "rgb(20, 83, 45, 0.3)",
    boxShadowAnimation: [
      "0 0 0 0 rgba(34, 197, 94, 0)",
      "0 0 0 20px rgba(34, 197, 94, 0.3)",
      "0 0 0 0 rgba(34, 197, 94, 0)"
    ]
  }
];

export type TrafficLightProps = {
  sentiment: Sentiment;
};

const TrafficLight = ({ sentiment }: TrafficLightProps) => {
  return (
    <Flex direction="column" align="center">
      <Flex
        direction="column"
        align="center"
        justify="between"
        gap="0.75rem"
        style={{
          padding: "1rem",
          borderRadius: "0.75rem",
          backgroundColor: "#d1d5db"
        }}
      >
        {lights.map((light) => (
          <motion.div
            key={light.sentiment}
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "999px",
              backgroundColor:
                light.sentiment === sentiment
                  ? light.activeColor
                  : light.inactiveColor
            }}
            animate={{
              boxShadow:
                light.sentiment === sentiment
                  ? light.boxShadowAnimation
                  : "none"
            }}
            transition={{
              duration: 2,
              repeat:
                light.sentiment === sentiment ? Number.POSITIVE_INFINITY : 0
            }}
          />
        ))}
      </Flex>
      <div
        style={{
          width: "2rem",
          height: "3rem",
          backgroundColor: "#d1d5db",
          borderBottomLeftRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem"
        }}
      />
    </Flex>
  );
};

export default TrafficLight;
