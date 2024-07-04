import * as U from "./util";

// 파라미터: 숫자값 2개, 반환값: 문자열
export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`;

// 랜덤 이미지 URL을 생성하는 함수
export const randomImage = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta));

export const randomAvatar = () => {
  const size = U.random(200, 400);
  return picsumUrl(size, size);
};
