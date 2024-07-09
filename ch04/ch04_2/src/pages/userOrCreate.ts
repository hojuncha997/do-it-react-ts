const cache: Record<string, any> = {}

export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback()
  return cache[key] as T
}

/*

캐시 구현하기
:

Record 타입은 타입스크립트가 기본으로 제공하며 객체의 속성을 '키'로 속성값을 '값'으로 할 때
'Record<키_타입, 값_타입>' 형태로 사용하는 제네릭이다.

코드에서 cache는 전역 변수로 선언했다. 그리고 cachep[key]에 설정한 값이 없을 때에는
callback 함수를 호출해 cache[key]에 저장할 값을 생성한 뒤 cache[key]에 저장한다.

useOrCreate는 항상 cache[key]에 저장된 값을 반환한다. 여기서 callback은 단 한 번만 호출한다.


*/
