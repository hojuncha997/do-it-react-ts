export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    console.log('onCallDispatchEvent')
    document
      .getElementById('root')
      ?.dispatchEvent(new Event('click', { bubbles: true }))
  }

  const onCallClick = () => {
    console.log('onCallClick')
    document.getElementById('root')?.click()
  }

  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>Call dispatchEvent</button>
      <button onClick={onCallClick}>Call click</button>
    </div>
  )
}

/*
DOM의 최상위 타입인 EventTarget은 dispatchEvent 메서드를 가지고 있다.
Event 타입 객체를 new Event('click', { bubbles: true })로 생성하여,
Event나 SyntheticEvent의 target 속성값이 되는 타겟_DOM_객체의 dispatchEvent 메서드를 호출하여
이벤트를 발생시킬 수 있다.

타겟_DOM_객체.dispatchEvent(new Event('click', {bubble: true}))




그런데 DOM 객체의 부모 타입인 HTMLElement는 click 메서드를 제공한다.
이 메서드는 dispatchEvent 코드와 완전히 동일한 효과를 낸다.
이로 짐작하여 HTMLElement의 click 메서드는 내부적으로 dispatchEvent를 호출하는 것으로 추정된다.

타겟_DOM_객체.click()


------------

Event 타입의 isTrusted 속성은 이벤트가 웹 브라우저에서 발생한 것인지(true), 프로그래밍으로 발생한 것인지(false)를 나타낸다.
dispatchEvent와 click 메서드로 발생시킨 이벤트는 프로그래밍으로 발생한 것이므로 isTrusted 속성은 false이다.





*/
