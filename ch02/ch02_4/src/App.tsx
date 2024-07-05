import P from './P'

export default function App() {
  const text = ['hello', 'world'].map((text, index) => (
    <P key={index} children={text} />
  ))

  return <div children={text} />
}
