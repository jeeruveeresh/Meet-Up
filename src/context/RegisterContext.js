import React from 'react'

const RegisterContext = React.createContext({
  inputName: '',
  topicText: '',
  isRegistered: false,
  inputMethod: () => {},
  topicMethod: () => {},
  isToggle: () => {},
})

export default RegisterContext
