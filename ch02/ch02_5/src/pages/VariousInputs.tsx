export default function VariousInputs() {
  return (
    <div>
      <p>VariouseInputs</p>
      <div>
        <input type="text" placeholder="enter some texts" />
        <input type="password" placeholder="enter password" />
        <input type="email" placeholder="enter email" />
        <input type="range" />
        <input type="button" value="I'm a button" />
        <input type="checkbox" value="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}

/*
<button>과 <input type="button">은 모두 버튼 역할을 한다.
그러나 <button>은 텍스트나 요소를 자식 요소로 포함할 수 있지만,
<input type="button">은 자식 요소를 포함할 수 없다.

*/
