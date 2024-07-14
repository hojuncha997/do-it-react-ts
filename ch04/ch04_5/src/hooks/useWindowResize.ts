import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useWindowResize = () => {
    const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

    useEffect(() => {
        setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
    }, [])  // 컴포넌트가 마운트 될 때 창 크기 설정

    useEventListener(window, 'resize', () => {
        setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
    })  // 창 크기가 변경될 때마다 창 크기 설정

    return widthHeight
}   


/*
    웹 브라우저의 창 크기가 변경될 때마다 이벤트를 발생시키는 커스텀 훅

    window객체의 타입인 Window는 EventTarget을 상속하므로 앞서 제작한 useEventListener 훅을 활용해
    target 매개변수에 window 객체를 전달하여 이벤트 처리기를 부착할 수 있다.

    또한 웹페이지의 크기는 window 객체의 innerWidth와 innerHeight 프로퍼티로 알 수 있다.
    그리고 이벤트 타입을 resize로 하면 웹페이지의 크기가 변경되는 것을 탐지할 수 있다.

    위 코드는 useState 훅으로 창의 크기를 상태로 만들고 컴포넌트가 마운트 될 때 창의 크기를 상태에 저장한다.
    그리고 resize 이벤트 처리기를 설치해 window의 크기가 변할 때마다

    바뀐 값으로 상태를 변경한다.

*/