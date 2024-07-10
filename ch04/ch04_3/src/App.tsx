import NumberState from "./pages/NumberState";
import InputTest from "./pages/InputTest";
import ShowHideModal from "./pages/ShowHideModal";
import RadioInputTest from "./pages/RadioInputTest";
import HigherOrderRadioInputTest from "./pages/HigherOrderRadioInputTest";
import BasicForm from "./pages/BasicForm";
import ObjectState from "./pages/ObjectState";
import ArrayState from "./pages/ArrayState";

export default function App() {
  return (
    <main>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </main>
  );
}

/*
  useState 훅이 반환하는 세터 함수는 리액트 프레임워크가 컴포넌트 내부의 상태 변화를 쉽게
  감지할 수 있게 해준다. 즉, 리액트 프레임워크는 세터 함수가 호출되면 컴포넌트의 상태에 
  변화가 있는 것으로 판단하고 즉시 해당 컴포넌트를 다시 렌더링한다.

  그런데 상태에는 타입이 있다. 상태는 number, string과 같은 원시 타입일 수도 있고,
  객체나 배열, 튜플 타입일 수도 있다.

  useState 훅의 선언문을 보면 상태의 타입이 S일 때 초깃값을 매개변수로 받는 제네릭 함수임을 알 수 있다.
  또한 S타입의 값과 Dispatch<setStateAction<S>> 타입의 세터 함수를 튜플 형태로 반환한다.

  // useState 훅의 선언문
  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]; 

  여기서 Dispatch와 SetStateAction 타입은 아래와 같다.
  
  type Dispatch<A> = (value: A) => void;
  type SetStateAction<S> = S | ((prevState: S) => S);

  이 두 타입이 결합된 Dispatch<SetStateAction<S>> 타입은 
  setter(newValue) 또는 setter(previousValue => newValue) 둘 중 하나의 함수 타입을 의미한다.

  
*/
