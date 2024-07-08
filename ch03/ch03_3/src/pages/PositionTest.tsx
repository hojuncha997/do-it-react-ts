import {Div, Title, Icon} from '../components'
import * as D from '../data'

const src = D.randomImage(800, 500)



// prettier-ignore
export default function PositionTest() {

  const icons = ['home', 'search', 'settings', 'favorite'].map((name) => (
    <Icon key={name} name={name} className="mr-2" />
  ))

  return (
    <Div>
      <Title>PositionTest</Title>
      // position: relative 
      <Div className="relative border-2 border-gray-500" src={src} height="10rem">

        // position: absolute 이 요소들은 부모 요소인 relative 요소에 대해 배치된다

        // 이 요소는 부모 요소의 좌측 상단에 배치된다. 좌측 1rem, 상단 1rem씩 떨어진다
        <Div className="absolute p-2 text-white bg-red-500" left="1rem" top="1rem">{icons}</Div>

        // 이 요소는 부모 요소의 우측 상단에 배치된다. 우측 1rem, 상단 1rem씩 떨어진다
        <Div className="absolute p-2 text-white bg-blue-500" right="1rem" top="1rem">{icons}</Div>

        // 이 요소는 부모 요소의 좌측 하단에 배치된다. 좌측 1rem, 하단 1rem씩 떨어진다
        <Div className="absolute p-2 text-white bg-pink-500" left="1rem" bottom="1rem">{icons}</Div>

        // 이 요소는 부모 요소의 우측 하단에 배치된다. 우측 1rem, 하단 1rem씩 떨어진다
        <Div className="absolute p-2 text-white bg-yellow-500" right="1rem" bottom="1rem">{icons}</Div>
      </Div>
    </Div>
  )
}
