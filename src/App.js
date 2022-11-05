import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

class App extends Component {
  state = {inputName: '', topicText: 'Arts and Culture', isRegistered: false}

  inputMethod = val => {
    this.setState({inputName: val})
  }

  topicMethod = val => {
    this.setState({topicText: val})
  }

  isToggle = () => {
    this.setState(prevState => ({isRegistered: !prevState.isRegistered}))
  }

  render() {
    const {inputName, isRegistered, topicText} = this.state
    console.log(inputName, topicText)
    return (
      <RegisterContext.Provider
        value={{
          inputName,
          topicText,
          isRegistered,
          isToggle: this.isToggle,
          topicMethod: this.topicMethod,
          inputMethod: this.inputMethod,
        }}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
