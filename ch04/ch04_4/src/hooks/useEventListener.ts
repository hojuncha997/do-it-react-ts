import { useEffect } from "react";

export const useEventListener = (
    target: EventTarget | null,
    type: string,
    callback: EventListenerOrEventListenerObject | null
) => {
    useEffect(() => {
        if (target && callback) {
            target.addEventListener(type, callback)
            return () => target.removeEventListener(type, callback)
        }
    }, [target, type, callback])
}


/*
    리액트 개발을 하다 보면 가끔 DOM이나 window 객체에 이벤트 처리기를 부착해야 할 때가 있다.
    HTMLElement와 같은 DOM 타입들은 EventTarget 타입의 상속 타입으로,
    EventTarget은 addEventListener() removeEventListener() 라는 메서드를 제공한다.

    setInterval처럼 addEventListener() 메서드를 호출하면 반드시 removeEventLsitener() 메서드를 호출해야
    메모리 누수가 발생하지 않는다. 이 훅은 이러한 이벤트 처리기를 부착하고 제거하는 작업을 처리한다.

    이 코드는 EventTarget의 addEventListener() 메서드가 가진 매개변수 타입을 그대로 상요하고 있다.
    코드에서 target과 callback은 null일 수 있으므로 null이 아닐 때만 addEventListener()를 호출하는 방식으로 구현한다.

    다만 target이나 callback이 초깃값은 null이었지만 어떤 값으로 바뀔 때를 대비해 useEffect의 의존성 목록에 담았다.

*/