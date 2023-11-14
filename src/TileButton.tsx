import { useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";

import { Tile } from "./mathler";

export const TileButton = ({
  tile,
  onPress,
}: {
  tile: Tile;
  onPress: (tile: Tile) => void;
}) => (
  <TouchableOpacity
    onPress={useCallback(() => onPress(tile), [tile, onPress])}
    style={{
      flex: 1,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.1)",
      backgroundColor: "#E2E8F1",
      paddingVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      minWidth: 60,
    }}
  >
    <Text style={{ fontSize: 24 }}>{tile}</Text>
  </TouchableOpacity>
);
