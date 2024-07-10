import { useMemo, useCallback } from 'react'
import { Title } from '../components'
import { Button } from '../theme/daisyui'
import * as D from '../data'

export default function Callback() {
  const onClick = useCallback((name: string) => alert(`${name} clicked`), [])

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            // onClick={onClick(name)}
            onClick={() => onClick(name)}
            className="normal-case btn btn-primary btn-wide btn-lg"
          >
            {name}
          </Button>
        )),
    [onClick]
  )

  return (
    <div className="mt-4">
      <Title>Callback</Title>

      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </div>
  )
}

/*


아래 코드는 ReactOnClick 컴포넌트가 렌더링 될 때마다 계속 다시 생성되어 비효율적이다.

import type {SyntheticEvent} from 'react'

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {}
  return (
    <button onClick={onClick}>Click Me</button>
  )
}

이렇한 함수를 useCallback을 사용하면 효율적이다. useCallback은 함수 몸통을 캐시하기 때문이다.
useCallback 훅의 사용 개념은 useMemo와 같다. 다만 useMemo가 데이터를 캐시한다면
useCallback은 콜백 함수를 캐시한다는 차이가 있다.

사용법은 아래와 같다.

import {useCallback} from 'react'
const 캐시된_콜백함수 = useCallback(원본_콜백함수, 의존성_목록)

아래는 타입스크립트로 작성한 useCallback 훅의 타입이다.

function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;

그런데 useCallback 훅의 타입변수 T는 (...args: any[]) => any 라는 타입 제한(type constraint)을 가지고 있다.
이는 타입 변수 T는 함수여야 함을 의미한다.

그런데 아래와 같이 사용하는 것은 권장하지 않는다.

const onClick = useCallback(() => alert('button clicked'), [])

이렇게 구현하면 callback 함수가 항상 새로 생성되기 때문에 useCallback을 사용하는 의미가 없다.
따라서 아래와 같이 사용하는 것을 권장한다.

const callback = () => alert('button clicked')
const onClick = useCallback(callback, [])

위 코드에서 callback 함수의 타입은 () => void 이다. 이는 함수의 반환값이 없음을 의미한다.
어쨌든 이 함수의 매개변수 부분 ()는 전개 연산자를 사용하면 (...[])가 되므로 (...args: any[])에 해당한다.
또한 함수의 반환타입 void도 any의 자식 타입이므로 합당하다.


*/

/*

고차 함수 사용하기
: 함수형 언어에서는 함수와 변수를 차별하지 않으므로 함수는 다른 함수의 입력 매개변수나 반환값으로도 사용될 수 있다.
고차함수(higher-order function)는 다른 함수를 반환하는 함수를 말한다.

리액트 개발에서 고차 함수는 콜백 함수에 어떤 정보를 추가로 전달하려고 할 때 주로 사용한다.

  const onClick = useCallback((name: string) => alert(`${name} clicked`), [])

  위 코드에서 onClick은 name을 매개변수로 받는 함수지만 () => alert(`${name} clicked`) 이라는 함수를
  다시 반환하므로 고차 함수이다.

  리액트 프로그래밍에서 고차함수를 구현하는 이유는 함수의 타입 불일치를 해결하기 위해서이다.
  onClick이벤트 속성은 () => void 타입의 콜백 함수를 설정해야 하므로, 아래처럼 콜백 함수 내부에서
  필요한 name 변수를 전달할 수 없다.

  () => alert(`${name} clicked`) // 타입 불일치로 name변수를 전달할 수 없다.

  그러나 콜백함수를 다음처럼 고차 함수로 구현하면 onClick이 요구하는 () => void 타입 함수를 반환할 수 있으면서
  동시에 함수 몸통이 요구하는 name 값 또한 전달할 수 있다.

  (name: string) => alert(`${name} clicked`)

 이를


*/
