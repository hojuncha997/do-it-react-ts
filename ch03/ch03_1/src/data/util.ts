export const makeArray = (length: number) => new Array(length).fill(null);

// 파라미터: 숫자값2개, 반환값: 숫자배열
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min);

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
