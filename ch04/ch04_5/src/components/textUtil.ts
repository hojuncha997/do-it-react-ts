// prettier-ignore
export const makeClassName = (setting: string, _className?: string, numberOfLines?: number) => 
[
    setting,
    numberOfLines ? `line-clamp-${numberOfLines}` : '',
    _className
].join(' ')

// 위 함수의 목적은 다음과 같다.
// 1. Tailwindcss의 className을 만들어주는 것
// 2. line-clamp-3을 적용할 수 있도록 하는 것
// 3. _className을 추가할 수 있도록 하는 것
// 이 함수를 사용하면 다음과 같이 코드를 작성할 수 있다.
// <p className={makeClassName('text-3xl', 'text-white', 3)}>Color</p>
// 이 코드는 다음과 같이 변환된다.
// <p className="text-3xl line-clamp-3 text-white">Color</p>
