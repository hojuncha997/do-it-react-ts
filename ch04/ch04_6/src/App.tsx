import ResponsiveContextTest from "./pages/ResponsiveContextTest";
import { ResponsiveProvider } from "./contexts";

export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  );
}

/*
  컨텍스트:

  컴포넌트의 속성은 부모 컴포넌트가 자식 컴포넌트로 어떤 정보를 전달하려고 할 때 사용하는 메커니즘이다.
  그런데 부모 컴포넌트가 손자나 증손자 컴포넌트에 정보를 전달하려고 할때 프롭스 드릴링이라는 문제가 발생한다.

  리액트는 이런 속성의 번거로움을 해소하고자 context라는 메커니즘을 제공한다.
  리액트나 리액트 네이티브에서 컨텍스트는 createContext와 useContext 훅으로 이뤄진다.


  createContext를 사용하여 컨텍스트를 생성하고,
  Provider 컴포넌트를 사용하여 컨텍스트의 값, 즉 공유할 값을 설정한다.

  자식, 손자 등 해당 정보를 사용할 컴포넌트에서 useContext를 사용하여 해당 정보를 사용할 수 있다.

  컨텍스트 기능을 사용하는 리액트 코드는 항상 이름에  Provider 가 있는 컴포넌트와
  use컨텍스트이름() 형태의 커스텀 훅을 사용한다. 예) useTheme(), useResponsive() 등

*/
