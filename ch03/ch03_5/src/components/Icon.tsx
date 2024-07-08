// import type { FC, CSSProperties } from 'react'
import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>
// ReactSpanProps이기도 하면서 name 속성도 받을 수 있는 타입 정의
export type IconProps = ReactSpanProps & {
  name: string
}

// export type IconProps = {
//   name: string
//   style?: CSSProperties
// }

// prettier-ignore
export const Icon: FC<IconProps> = ({ name, className: _className,...props }) => {

  const className = ['material-icons', _className].join(' ')

  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}

/*
export const Icon: FC<IconProps> = ({ name, style }) => {
  return (
    <span className="material-icons" style={style}>
      {name}
    </span>
  )
}
*/

/*
리액트가 제공하는 DetailedHTMLProps와 HTMLAttributes 타입
: 리액트 프레임워크는 한꺼번에 특정 HTML 요소의 속성들을 추가할 수 있게 해주는
DetailedHTMLProps와 HTMLAttributes 타입을 제공한다.

*/

/*

타입스크립트의 교집합 타입 구문

: 자바와 같은 객체지향 언어에서는 다음처럼 interface라는 이름의 키우더ㅡ로 ReactSpanProps를 선언하고,
extends와 같은 키워드로 ReactSpanProps를 상속하는 형태로 IconProps인터페이스를 만드는 방식을 사용한다.

export interface IconProps extends ReactSpanProps {
  name: string
}

반면에 함수형 언어에서는 교집합 타입 구문을 사용한다. 
'|'기호를 쓰는 합집합 타입(union type)과 '&'기호를 쓰는 교집합 타입(intersection type)이 있다.
위의 IconProps 타입은 ReactSpanProps 타입이면서 동시에 특별히 이름을 짓지 않은 {name: string} 타입이라는 의미이다.
이렇게 하면 IconProps 타입을 사용할 때 ReactSpanProps의 속성을 사용할 수 있으면서 name 속성도 사용할 수 있다.

IconProps가 이 두 가지 타입의 교집합 타입이므로 {name: string} 타입의 name 속성과 ReactSpanProps 타입 props를 잔여 연산자 구문으로\
각기 얻을 수 있다.

*/

/*
타입스크립트에서 매개변수 이름 바꾸기

타입스크립트는 매개변수 이름 뒤에 콜론(:)을 붙이는 방식으로 매개변수 이름을 다른 이름으로 바꿀 수 있다.
아래 코드는 className이란 변수 이름을 _className으로 바꾸는 코드이다.

export const Icon: FC<IconProps> = ({ name, className: _className, ...props }) => {

*/
