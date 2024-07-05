import type { SyntheticEvent } from 'react'

export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) =>
    console.log('click event bubbles on <div>')

  const onButtonClick = (e: SyntheticEvent) => {
    console.log('mouse click occurs on <button> and call stopPropagation')
    e.stopPropagation()
  }

  return (
    <div onClick={onDivClick}>
      <p>StopPropagtion</p>
      <button onClick={onButtonClick}>
        Click Me and stop event propagation
      </button>
    </div>
  )
}

/*

이벤트 버블링(Event Bubbling)은 웹 개발에서 이벤트 처리를 간편하게 하고,
코드의 재사용성을 높이며, 성능을 최적화하는데 중요한 역할을 한다.

1. 이벤트 위임(Event Delegation)

이벤트 위임은 자식 요소들 각각에 이벤트 핸들러를 붙이는 대신,
공통된 부모 요소에 하나의 이벤트 핸들러를 붙여서 이벤트를 처리하는 방식이다.
예를 들어, 여러 개의 버튼이 있는 경우 각각의 버튼에 이벤트 핸들러를 붙이는 대신,
이 버튼들을 감싸고 있는 부모 요소에 하나의 이벤트 핸들러를 붙이면 된다. 
이렇게 하면 코드가 간결해지고, 메모리 사용량이 줄어들며, 성능이 개선된다.

2. 코드 재사용성

부모 요소에 이벤트 핸들러를 부착하면, 자식 요소들이 동적으로 추가되거나 제거되더라도 부모 요소의 이벤트 핸들러를 그대로 사용할 수 있다.
 이를 통해 코드의 재사용성이 높아지고, 유지보수가 쉬워진다.

 3. 이벤트 흐름 제어

 이벤트 버블링을 이용하면 특정 조건에서 이벤트의 전파를 막을 수 있다. 
e.stopPropagation() 메서드를 사용하여 이벤트가 더 이상 상위 요소로 전파되지 않도록 할 수 있다.
이를 통해 이벤트 흐름을 세밀하게 제어할 수 있다.

---

자식 요소와 부모 요소의 이벤트 핸들러가 같을 때만 이벤트 버블링이 발생하는 것은 아니다.
자식 요소에 onchange가, 부모 요소에 onclick이 있는 경우에도 이벤트 버블링이 발생한다.
즉, 이벤트 객체가 부모 요소로 전달되므로 이벤트 버블링은 발생한다.
이벤트의 타입이 달라서 이벤트 핸들러가 동작하지 않을 뿐이다.




*/
