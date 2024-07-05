const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e

    // 출력되지 않는다. addEventListener와는 달리 onclick은 가장 마지막에 설정된 콜백 함수를 호출한다.
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }

  rootDiv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e
    // prettier-ignore
    console.log("mouse click also occurs on rootDiv", isTrusted, target, bubbles) // 출력된다.
  }
}

export default function OnClick() {
  return <div>OnClick</div>
}

/*
  OnClick을 클릭하면 EventListener.tsx의 addEventListener 관련 코드와
  여기의 onclick 관련 코드가 실행된다.
*/
