import type { DragEvent } from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('onDragStart', e.dataTransfer)
  }

  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('onDragEnd', e.dataTransfer)
  }

  const onDragOver = (e: DragEvent) => {
    e.preventDefault()
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }

  return (
    <div>
      <p>DragDrop</p>
      <div draggable={true} onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag me</h1>
      </div>

      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop over Me</h1>
      </div>
    </div>
  )
}

/*
  모든 HTMLElement 상속 요소는 draggable이라는 boolean 타입 속성을 제공한다.

  <h1 draggable="true">Drag me</h1>

  draggable="true"로 설정하면 드래그 앤 드롭 관련 이벤트가 발생한다.



  그런데 드래그 앤 드롭 이벤트를 처리하려면 EventTarget 타입이 제공하는 preventDefault() 메서드를 알아야 한다.
  
  preventDefault() 메서드는 어떤 사용자 액션에 따라 이벤트가 발생했을 때
  이 이벤트와 관련된 웹브라우저의 기본 구현 내용을 실행하지 않도록 한다.

  웹브라우저는 기본적으로 drop 이벤트가 발생하지 않도록 설계되었다. 
  이에 따라 drop 이벤트가 발생하려면 dragover 이벤트 핸들러에서 preventDefault 메서드를 호출해야 한다.

  const onDragOver = (e: DragEvent) => {
    e.preventDefault()
  }

  또한 onDrop 이벤트 핸들러에서도 preventDefault 메서드를 호출하는 것이 좋다.
  만일 어떤 파일을 드롭할 때 웹 브라우저는 드롭한 파일을 새로운 창을 열어 보여주기 때문이다.
  따라서 이를 방지하기 위해 preventDefault 메서드를 호출한다.

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
  } 





*/
