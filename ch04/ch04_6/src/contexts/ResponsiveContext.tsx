import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { useWindowResize } from "../hooks";

type contextType = {
  breakpoint: string; // 공유할 데이터 속성
};

const defaultContextValue: contextType = {
  breakpoint: "",
};

// createContext 함수로 컨텍스트 객체를 생성한다. 컨텍스트 생성.
export const ResponsiveContext =
  createContext<contextType>(defaultContextValue);

type ResponsiveProviderProps = {};

// 프로바이더 컴포넌트를 만든다. 컨텍스트의 값을 설정한다.
export const ResponsiveProvider: FC<
  PropsWithChildren<ResponsiveProviderProps>
> = ({ children, ...props }) => {
  const [width] = useWindowResize();
  const breakpoint =
    width < 640
      ? "sm"
      : width < 768
      ? "md"
      : width < 1024
      ? "lg"
      : width < 1280
      ? "xl"
      : "2xl";

  const value = {
    breakpoint, // breakpoint:  breakpoint 코드를 줄여서 breakpoint로 사용
  };

  return <ResponsiveContext.Provider value={value} children={children} />;
};

export const useResponsive = () => {
  const { breakpoint } = useContext(ResponsiveContext);
  return breakpoint;
};

/*
    컨텍스트 객체가 제공하는 Provider 컴포넌트
    : createContext 함수 호출로 생성된 컨텍스트 객체는 Provider와 Consumer라는 컴포넌트를 제공한다.
    여기서 Provider는 컨텍스트의 기능을 제공할 컴포넌트이고,
    Consumer는 Provider가 제공한 기능을 사용하고 싶은 클래스 컴포넌트이다.
    이 프로젝트에서는 컴포넌트를 대부분 함수형으로 구현하므로 Consumer는 무시해도 된다.
    함수형 컴포넌트에서는 Consumer보다 용법이 간단한 useContext 훅을 사용하여 컨텍스트의 값을 사용할 수 있기 때문이다.

    Provider 컴포넌트는 아래처럼 value와 children 속성이 있는 ProviderProps 속성을 제공한다.
    여기서 타입변수 T는 createContext<T> 와 같다. 
    value 속성에 설정하는 값이 Provider 컨텍스트가 제공하는 기능이 된다.
    Provider 컴포넌트에는 반드시 value 속성을 설정해 줘야 한다. 그렇지 않으면 에러가 발생한다.


    interface ProviderProps<T> {
        value: T;
        children: ReactNode;
    }



  */
