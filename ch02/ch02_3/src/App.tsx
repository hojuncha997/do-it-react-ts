import { Component, ReactNode } from 'react'

export default class App extends Component {
  render() {
    const isLoading = true
    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <ul>
        <li>
          <a href="http://www.google.com">
            <p>go to Google</p>
          </a>
        </li>
      </ul>
    )
  }
}
