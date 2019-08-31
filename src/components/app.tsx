import * as React from 'react'

interface AppInterface {}

class App extends React.Component<AppInterface> {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>

        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
      </div>
    )
  }
}

export default App
