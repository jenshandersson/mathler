export type Tile =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "+"
  | "-"
  | "/"
  | "*";
export type Row = Tile[];
export type Color = "green" | "yellow" | "grey";
export type Guess = { content: Tile; color: Color };

export const calculateSum = (tiles: Row) =>
  // Could install a 3rd party lib for this but didn't want to bloat the app.
  // eslint-disable-next-line no-eval
  eval(tiles.join("").replace(/[^0-9*/+\-.\s]/g, ""));

export const guess = (answer: Row, guess: Row) => {
  try {
    const answerSum = calculateSum(answer);
    const guessSum = calculateSum(guess);
    if (answerSum !== guessSum) {
      return false;
    }
  } catch {
    return false;
  }

  const result = guess.map((tile, index) => {
    let color = "grey";
    if (tile === answer[index]) {
      color = "green";
    } else if (answer.includes(tile)) {
      color = "yellow";
    }
    return { content: tile, color } as Guess;
  });
  return result;
};

export const problems = [
  ["1", "1", "9", "-", "4", "1"],
  ["2", "1", "/", "7", "+", "9"],
  ["9", "0", "/", "9", "+", "7"],
  ["1", "8", "+", "6", "-", "3"],
  ["2", "4", "*", "2", "-", "9"],
  ["1", "1", "2", "-", "4", "7"],
  ["2", "7", "*", "3", "-", "9"],
  ["2", "8", "-", "3", "+", "7"],
  ["9", "5", "/", "5", "+", "8"],
  ["1", "3", "2", "-", "5", "9"],
] as Row[];
