import {Link} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeImgLogo,
  CardOne,
  Heading,
  Para,
  RegisterButton,
  MeetImg,
  HeadTwo,
  ParaTwo,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {inputName, topicText, isRegistered} = value
      return (
        <>
          {isRegistered ? (
            <>
              <HomeImgLogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <CardOne>
                <HeadTwo>{`Hello ${inputName}`}</HeadTwo>
                <ParaTwo>{`Welcome to ${topicText}`}</ParaTwo>
                <MeetImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </CardOne>
            </>
          ) : (
            <>
              <HomeImgLogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <CardOne>
                <Heading>Welcome to Meetup</Heading>
                <Para>Please register for the topic</Para>
                <Link to="/register">
                  <RegisterButton type="button">Register</RegisterButton>
                </Link>
                <MeetImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </CardOne>
            </>
          )}
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
