import type { FC, PropsWithChildren } from 'react'

export type PProps = {
  //   children?: ReactNode
}

// const P: FC<PProps> = (props) =>
const P: FC<PropsWithChildren<PProps>> = (props) => {
  const { children } = props

  return <p children={children} />
}

export default P

/*

리액트는 17버전까지는 children 속성을 FC 타입에 포함했다.
하지만 18버전부터는 FC타입에서 children 속성을 제외했다.

그리고 PropsWithChildren이라는 제네릭 타입을 사용하여 
children?: ReactNode 부분을 PropsWithChildren 타입으로 대체했다.

*/
