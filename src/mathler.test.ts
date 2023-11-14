import { Row, calculateSum, guess } from "./mathler";

describe("mathler", () => {
  it("calculate sums", () => {
    expect(calculateSum(["1", "+", "2", "+", "1", "1"])).toEqual(14);
    expect(calculateSum(["-", "1", "0", "+", "1", "0"])).toEqual(0);
  });

  it("guess correctly", () => {
    const answer = "1+2+3+4".split("") as Row;
    expect(guess(answer, answer)).toEqual(
      answer.map((t) => ({ content: t, color: "green" }))
    );
  });

  it("guess wrong sum", () => {
    const answer = "1+2+3+4".split("") as Row;
    const wrong = "1+2+3+3".split("") as Row;
    expect(guess(answer, wrong)).toEqual(false);
  });

  it("guess almost correct", () => {
    const answer = "1+2+3+4".split("") as Row;
    const wrong = "4+3+2+1".split("") as Row;
    expect(guess(answer, wrong)).toEqual([
      { content: "4", color: "yellow" },
      { content: "+", color: "green" },
      { content: "3", color: "yellow" },
      { content: "+", color: "green" },
      { content: "2", color: "yellow" },
      { content: "+", color: "green" },
      { content: "1", color: "yellow" },
    ]);
  });
});
