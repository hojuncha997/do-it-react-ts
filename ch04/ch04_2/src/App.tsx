import UseOrCreateTest from './pages/UseOrCreateTest'
import Memo from './pages/Memo'
import Callback from './pages/Callback'
import HighOrderCallback from './pages/HighOrderCallback'

export default function App() {
  return (
    <div>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </div>
  )
}

/*
상태와 캐시
:
프로그래밍 분야에서 상태(state)란 용어는 변수의 유효 범위와 무관하게 계속 유지(preseve)되는 값을 의미한다.
그런데 상태는 
- 한 번 설정되면 이후로는 값을 변경할 수 없는 '읽기 전용(readOnly)' 개념을 가진 불변상태(immutable state)와
- 아무 때나 값을 변경할 수 있고 변경된 값을 저장하고 유지하는 '가변 상태(mutable state)'로 나뉜다.

그런데 함수 컴포넌트는 '함수'이므로 블록 범위라는 개념 때문에 상태를 가질 수 없다.
함수 컴포넌트가 상태를 가질 수 있는 유일한 방법은 상태를 담은 변수를 함수 몸통 바깥으로 꺼내어,
블록 범위의 영향을 받지 않게 하는 것이다.

이처럼 블록 범위 바깥의 변수를 전역변수(global variable)라고 한다.

const global = 1

export default function UseOrCreate() {
return <p>{global}</p>
}

리액트 훅은 상태를 가질 수 없는 함수 컴포넌트로 하여금 마치 상태를 가진 것처럼 동작할 수 있게 해준다.
그리고 이런 개념을 이용해서 cache를 전역변수 형태로 만들어 구현할 수 있다.

캐시는 데이터나 값을 미리 복사해 놓는 임시 저장소를 의미한다.
캐시는 원본 데이터에 접근하는 시간이 오래 걸리거나 값을 다시 계산하는 시간을 절약하고 싶을 때 주로 사용한다.

*/
