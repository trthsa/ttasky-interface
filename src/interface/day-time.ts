enum DAY {
  Monday,
  Tuesday,
  Wednesdays,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const DAY_CONST = [
  DAY.Monday,
  DAY.Tuesday,
  DAY.Wednesdays,
  DAY.Thursday,
  DAY.Friday,
  DAY.Saturday,
  DAY.Sunday,
];
interface Shift {
  shiftName: string;
  availableOn: {
    [key in DAY]?: boolean;
  };
}

export { DAY, DAY_CONST };
export type { Shift };
