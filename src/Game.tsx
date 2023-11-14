import { useCallback, useMemo, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { TileBox } from "./TileBox";
import { TileButton } from "./TileButton";
import { Tile, Guess, Row, guess, calculateSum, problems } from "./mathler";

const SIX = Array(6).fill(0);

const tileButtonRows: Tile[][] = [
  ["1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "0"],
  ["+", "-", "*", "/"],
];

export default function Game() {
  const [day, setDay] = useState(0);
  const answer = useMemo(() => problems[day], [day]);
  const sum = useMemo(() => calculateSum(answer), [answer]);
  const [input, setInput] = useState<Row>([]);
  const [guesses, setGuesses] = useState<Guess[][]>([]);

  const onTilePress = useCallback((content: Tile) => {
    setInput((i) => (i.length >= 6 ? i : [...i, content]));
  }, []);

  const onNewGame = useCallback(() => {
    setDay((d) => d + 1);
    setGuesses([]);
    setInput([]);
  }, []);

  const onEnter = useCallback(() => {
    const result = guess(answer, input);
    if (result === false) {
      alert("Every guess must equal " + sum);
      return;
    }

    setGuesses((g) => [...g, result]);
    setInput([]);
  }, [answer, input, sum]);

  const completed = useMemo(
    () =>
      guesses[guesses.length - 1]?.filter((g) => g.color === "green").length ===
      6,
    [guesses]
  );

  const failed = useMemo(
    () => guesses.length >= 6 && !completed,
    [completed, guesses.length]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={{ padding: 4, fontSize: 14 }}>
          Find the hidden calculation that equals {sum}
        </Text>
        {completed && (
          <>
            <Text style={{ padding: 4, fontSize: 14 }}>
              Congratulations! You made it in {guesses.length} guesses.
            </Text>
            <Button title="New game" onPress={onNewGame} />
          </>
        )}
        {failed && (
          <>
            <Text style={{ padding: 4, fontSize: 14 }}>You failed :(</Text>
            <Button title="New game" onPress={onNewGame} />
          </>
        )}
        <View style={styles.row}>
          {SIX.map((_, i) => (
            <TileBox key={i} content={input[i]} />
          ))}
        </View>
        {guesses.map((guess, i) => (
          <View key={i} style={styles.row}>
            {guess.map((g, i) => (
              <TileBox key={i} {...g} />
            ))}
          </View>
        ))}
      </View>
      <View style={{ flex: 1 }} />
      {tileButtonRows.map((r) => (
        <View style={styles.keyboardRow}>
          {r.map((t) => (
            <TileButton key={t} tile={t} onPress={onTilePress} />
          ))}
        </View>
      ))}
      <View style={styles.keyboardRow}>
        <TouchableOpacity
          onPress={useCallback(() => setInput((i) => i.slice(0, -1)), [])}
          style={styles.textButton}
        >
          <Text style={styles.textButtonText}>Del</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={useCallback(() => setInput([]), [])}
          style={styles.textButton}
        >
          <Text style={styles.textButtonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEnter} style={styles.textButton}>
          <Text style={styles.textButtonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  row: { flexDirection: "row", gap: 2, marginTop: 2 },
  keyboardRow: { flexDirection: "row" },
  textButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    backgroundColor: "#E2E8F1",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  textButtonText: { fontSize: 24 },
});
