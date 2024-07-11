import { useState, useCallback } from "react";

export const useToggle = (
  initialChecked: boolean = false
): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked);
  const toggleChecked = useCallback(
    () => setChecked((checked) => !checked),
    []
  );
  return [checked, toggleChecked];
};

/*
boolean 타입의 initialChecked를 매개변수로 받고, 그걸 상태 값으로 사용한다.
그리고 toggleChecked 함수를 반환한다. 이 함수의 내부에는 세터 함수를 호출하는 콜백 함수(setChekced)가 있다.
이 콜백 함수는 checked 값을 반전시킨다. 즉, true면 false로, false면 true로 바꾼다.
마지막으로 상태 값과 토글 함수를 배열로 반환한다. [boolean, () => void]

이 훅은 다음과 같이 사용할 수 있다.
const [checked, toggleChecked] = useToggle();
<input type="checkbox" checked={checked} onChange={toggleChecked} />




*/
