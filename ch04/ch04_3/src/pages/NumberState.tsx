import { useState, useCallback } from "react";
import { Title } from "../components";
import { Icon } from "../components";

export default function NumberState() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <h2 className="text-5xl font-bold text-center">Copy Me</h2>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon
            name="add"
            className="bg-blue-500 btn-primary btn-lg"
            onClick={increment}
          />
          <p className="text-3xl text-bold text-primary">{count}</p>
          <Icon
            name="remove"
            className="bg-red-500 btn-accent btn-lg"
            onClick={decrement}
          />
        </div>
      </div>
    </section>
  );
}

/*

number 타입일 때 useState 훅 사용하기:

const [count, setCount] = useState<number>(0)

const increment = () => setCount(count + 1)
<button onClick={increment}>+</button>

또 다른 방법은 (prevState: S) => prevState + 1을 사용하는 것이다.
이 코드는 현재 count 값에 1만큼 더한 새로운 count 값을 반환한다.

const increment = () => setCount((count) => count + 1)

그런데 increment 콜백 함수를 아래 코드처럼 useCallback 훅으로 캐시하면 count에 의존성 문제가 발생한다.

const increment = useCallback(() => {
  setCount(count + 1)
}, [count])

count가 초깃값 0일 때 increment가 호출되면 count는 1이 되지만,
useCallback 함수 내부에서 count는 여전히 0이다. 즉, count를 의존성 목록에 등록하지 않으면
리액트는 useCallback 훅의 콜백 함수 내부에서 count 값을 갱신하지 않으므로 항상 0이 된다.
하지만 count를 의존성 목록에 넣으면 리액트는 변경된 count 값 1이 반영된 새로운 콜백 함수를 캐시한다.


 !!그런데 increment를 아래처럼 구현하면 count에 의존성 문제가 발생하지 않는다.

  const increment = useCallback(() => {
    setCount((count) => count + 1)  // 함수를 입력 변수로 세터 호출
  }, [])  // 의존성 목록에 count를 넣지 않음


 코드에서 setCount의 입력 변수 count => count + 1은 함수이다. 
 리액트는 세터 함수의 입력 변수가 함수일 때는 현재 유지되고 있는 값을 매개변수로 하여 세터 함수를 호출한다.
 그리고 세터 함수가 반환한 값을 새로운 count 값으로 설정하므로 count에 의존성 문제가 발생하지 않는다.


*/
