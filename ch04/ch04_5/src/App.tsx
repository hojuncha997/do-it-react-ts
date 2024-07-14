import ClickTest from './pages/ClickTest'
import FileDrop from './pages/FileDrop'
import InputFocusTest from './pages/InputFocusTest'
import InputValueTest from './pages/InputValueTest'
import ForwardRefTest from './pages/ForwardRefTest'
import ValidatableInputTest from './pages/ValidatableInputTest'

export default function App() {
  return (
    <main>
      <ValidatableInputTest />
      <ForwardRefTest />
      <InputValueTest />
      <InputFocusTest />
      <FileDrop />
      <ClickTest />
    </main>
  )
}


/*
  ref 속성
  : 모든 리액트 컴포넌트는 reference의 앞 3글자를 딴 ref 속성을 제공한다.
  그런데 ref 속성값은 코드에서 설정하는 것이 아니라 어떤 시점에 리액트 프레임워크 내부에서 설정해 준다.
  ref 속성은 초기에는 null이었다가 마운트 되는 시점에서 물리 DOM 객체의 값이 된다.

  즉 ref는 물리 DOM 객체의 참조이다.

  HTML 요소들은 자바스크립트로는 DOM 타입 객체이다. 예를 들어 <div>, <button>과 같은 요소들은 모두
  HTMLElement 상속 타입인 HTMLDivElement, HTMLButtonElement 타입의 객체이다.

  HTMLElement 타입은 click(), blur(), focus() 메서드를 제공한다.
  이 메서드들은 리액트 요소가 가상 DOM 상태일 때는 호출할 수 없고 물리 DOM 상태일 때만 호출할 수 있다.

  ref 속성값은 물리 DOM 상태일 때의 값이므로 ref로 얻은 값(즉, DOM 객체)을 사용해 click()과 같은 메서드를 호출할 수 있다.
  
*/