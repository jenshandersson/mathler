import { Row, calculateSum, validateGuess } from "./mathler";

describe("mathler", () => {
  it("calculate sums", () => {
    expect(calculateSum(["1", "+", "2", "+", "1", "1"])).toEqual(14);
    expect(calculateSum(["-", "1", "0", "+", "1", "0"])).toEqual(0);
  });

  it("calculate invalid sums", () => {
    expect(calculateSum(["/", "1", "2", "+", "1", "1"])).toEqual(NaN);
  });

  it("guess correctly", () => {
    const answer = "1+2+3+4".split("") as Row;
    expect(validateGuess(answer, answer)).toEqual(
      answer.map((t) => ({ tile: t, color: "green" }))
    );
  });

  it("guess wrong sum", () => {
    const answer = "1+2+3+4".split("") as Row;
    const wrong = "1+2+3+3".split("") as Row;
    expect(validateGuess(answer, wrong)).toEqual(false);
  });

  it("guess almost correct", () => {
    const answer = "1+2+3+4".split("") as Row;
    const wrong = "4+3+2+1".split("") as Row;
    expect(validateGuess(answer, wrong)).toEqual([
      { tile: "4", color: "yellow" },
      { tile: "+", color: "green" },
      { tile: "3", color: "yellow" },
      { tile: "+", color: "green" },
      { tile: "2", color: "yellow" },
      { tile: "+", color: "green" },
      { tile: "1", color: "yellow" },
    ]);
  });
});
