import {Component} from 'react'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeImgLogo,
  CardOne,
  RegisterImg,
  Heading,
  InnerCardOne,
  LabelElement,
  InputField,
  SelectField,
  Button,
  Para,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {showError: false}

  render() {
    const {showError} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {inputName, topicMethod, inputMethod, isToggle} = value
          const buttonRegister = event => {
            event.preventDefault()
            if (inputName !== '') {
              isToggle()
              const {history} = this.props
              history.replace('/')
            }
            this.setState({showError: true})
            return null
          }

          const inputChange = event => {
            inputMethod(event.target.value)
          }

          const topicChange = event => {
            const res = topicsList.filter(e => e.id === event.target.value)
            topicMethod(res[0].displayText)
          }

          return (
            <>
              <HomeImgLogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <CardOne>
                <RegisterImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <InnerCardOne onSubmit={buttonRegister}>
                  <Heading>Let us join</Heading>
                  <LabelElement htmlFor="name">NAME</LabelElement>
                  <InputField
                    type="text"
                    value={inputName}
                    id="name"
                    placeholder="Your name"
                    onChange={inputChange}
                  />
                  <LabelElement htmlFor="topics">TOPICS</LabelElement>
                  <SelectField id="topics" onChange={topicChange}>
                    <option value={topicsList[0].id}>
                      {topicsList[0].displayText}
                    </option>
                    <option value={topicsList[1].id}>
                      {topicsList[1].displayText}
                    </option>
                    <option value={topicsList[2].id}>
                      {topicsList[2].displayText}
                    </option>
                    <option value={topicsList[3].id}>
                      {topicsList[3].displayText}
                    </option>
                    <option value={topicsList[4].id}>
                      {topicsList[4].displayText}
                    </option>
                  </SelectField>
                  <Button type="submit">Register Now</Button>
                  {showError && <Para>Please enter your name</Para>}
                </InnerCardOne>
              </CardOne>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
