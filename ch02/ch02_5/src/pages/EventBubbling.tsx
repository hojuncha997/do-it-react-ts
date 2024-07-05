import type { SyntheticEvent } from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e

    console.log(
      'click event bubbles on <div>',
      isTrusted,
      target,
      bubbles,
      currentTarget
    )
  }

  const onButtonClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e

    console.log('click event bubbles on <button>', isTrusted, target, bubbles)
  }

  return (
    <div onClick={onDivClick}>
      <p>Event Bubbling</p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )
}

/*
<button>에서 발생한 click 이벤트가 onButtonClick은 물론 <button>의 부모 요소인 <div>의 onDivClick에게까지 전파된다.
그리고 target값은 <button>이지만 currentTarget값은 <div>가 된다. currentTarget은 이벤트의 현재 대상, 즉 이벤트 버블링 중 현재 이벤트가 위치한 객체를 가리킨다.
*/

/*
이벤트 버블링은 자식 요소에서 발생한 이벤트가 가까운 부모 요소에서부터 가장 먼 조상 요소까지 전파되는 현상을 말한다.

  const onDivClick = (e: SyntheticEvent) => { e.currentTarget}  // null이 아닌 값
  const onButtonClick = (e: SyntheticEvent) => { e.currentTarget}  // null

  return (
    <div onClick={onDivClick}>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )

위 코드는 버튼 뿐만 아니라 부모 요소인 div에도 click이벤트 핸들러가 부착되었다.
이 때 button 영역에 마우스 클릭이 일어나면 이벤트 버블링 때문에 onButtonClick은 물론이고 onDivClick도 실행된다.

이벤트 버블링이 일어나면 이벤트가 직접 발생한 onButtonClick에서는 e.currentTarget가 null이지만,
부모 요소인 onDivClick에서는 e.currentTarget 값이 <div>의 DOM 객체로 설정된다.
*/
