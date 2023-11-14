import { Text, View } from "react-native";

import { Color } from "./mathler";

const hexColors = {
  green: "#21C55F",
  yellow: "#EBB30C",
  grey: "#95A4B9",
};

export const TileBox = ({
  content,
  color,
}: {
  content: string;
  color?: Color;
}) => (
  <View
    style={{
      flex: 1,
      borderWidth: 2,
      borderColor: "rgba(0,0,0,0.1)",
      borderRadius: 8,
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color && hexColors[color],
    }}
  >
    <Text style={{ fontSize: 30, color: color ? "#fff" : "#333" }}>
      {content}
    </Text>
  </View>
);
