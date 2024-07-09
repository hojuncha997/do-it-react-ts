import { Title, Avatar } from '../components'
import * as D from '../data'
import { useOrCreate } from './userOrCreate'

export default function CreateOrUseTest() {
  // prettier-ignore
  const headTexts = useOrCreate<string[]>('headTexts', () => [
    'No.', 'Name', 'Job Title', 'Email Address'
  ])

  const users = useOrCreate<D.IUser[]>('users', () =>
    D.makeArray(100).map(D.makeRandomUser)
  )

  const head = useOrCreate('head', () =>
    headTexts.map((text) => <th key={text}>{text}</th>)
  )

  const body = useOrCreate('children', () =>
    users.map((user, index) => (
      <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td className="flex item-center">
          <Avatar src={user.avatar} size="1.5rem" />
          <p className="ml-2">{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    ))
  )

  return (
    <div className="mt-4">
      <Title>CreateOrUseTest</Title>
      <div className="p-4 mt-4 overflow-x-auto">
        <table className="table w-full table-zebra table-compact">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}

/*
  캐시 사용하기

  캐시의 의존성 목록 p274

  : 리액트 프레임워크 내부에서 관리되는 캐시된 값은 어떤 상황이 일어나면 값을 갱신해 줘야 한다.
  리액트 훅에서는 캐시를 갱신하게 하는 요소를 의존성(dependency)이라고 한다.
  이러한 의존성으로 구성된 배열을 의존성 목록(dependency list)라고 한다.

  리액트 프레임워크는 의존성 목록 중 어느 것 하나라도 조건이 충족되면 
  캐시된 값을 자동으로 갱신하고 해당 컴포넌트를 다시 렌더링하여 변경사항을 반영해 준다.

  만일 이런 캐시 갱신이 필요 없다면, 즉 의존성이 전혀 없다면 의존성 목록은 단순히 빈 배열 []을 사용하면 된다. 

  
  
  함수 컴포넌트와 리액트 훅을 사용하는 이유
  : 리액트는 컴포넌트의 속성값이 변할 때 항상 최신 값이 반영되도록 다시 렌더링 해준다.
  그런데 컴포넌트 내부 로직에서 컴포넌트가 다시 렌더링 되는 때는 리액트가 탐지하기 어렵다.
  이 때문에 클래스 기반 컴포넌트는 다양한 메서드를 구현해서 렌더링 여부를 판단할 수 있게 한다.

  반면 함수 컴포넌트에 리액트 훅을 사용하면 리액트 프레임워크가 의존성 목록에서 변한 값이 있는지만
  판단하면 되므로 다시 렌더링 해야 하는 때를 판단하기 쉽다.

  따라서 의미조차 알기 어려운 메서드들을 일일이 구현할 필요가 없어 컴포넌트 개발이 수월해진다.

*/
