import type { ChangeEvent } from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangeValue', e.target.value)
  }

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }

  // prettier-ignore
  return (
    <div>
      <p>OnChange</p>
      <div>
        <input type="text"  onChange={onChangeValue} placeholder="type some text"/>
        <input type="checkbox" value="I'm a checkbox"  onChange={onChangeChecked} defaultChecked/>
        <input type="file" onChange={onChangeFiles} multiple accept='image/*'/>
      </div>
    </div>
  )
}

/*
사용자의 입력이 text라면 change 이벤트가 발생하며, 이 change 이벤트는 onChange 이벤트 속성으로 얻을 수 있다.

아래 코드는 제네릭 타입 ChangeEvent<T>의 선언문으로 SyntheticEvent에 Target이라는 이름의 속성을
추가한 타입임을 알 수 있다. 여기서 타입 변수는 HTMLElement나 HTMLInputElement와 같은 DOM 타입이어야 한다.

// ChangeEvent<T>의 선언문
export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T
}

*/

/*
  multiple 속성은 여러 개의 파일을 선택할 수 있도록 하는 속성이다.
  accept 속성은 파일 업로드 시 허용할 파일의 MIME 타입을 지정하는 속성이다.
  /image/*은 모든 이미지 파일을 허용한다는 의미이다.
  /text/plain은 텍스트 파일만 허용한다는 의미이다.


*/
