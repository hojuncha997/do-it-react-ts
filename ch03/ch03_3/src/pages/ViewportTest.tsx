import { Title, Div } from '../components'

export default function ViewportTest() {
  return (
    <section className="w-screen h-screen mt-4 bg-indigo-900">
      <Title className="text-white">ViewportTest</Title>
      <Div className="h-40" text-center bg-blue-500 mt-4>
        <Div className="bg-blue-500 h-1/2">
          <p className="text-center text-red-50">h-1/2</p>
        </Div>
        <Div className="bg-red-500 h-20">
          <p className="text-center text-red-50">h-20</p>
        </Div>
      </Div>
    </section>
  )
}
