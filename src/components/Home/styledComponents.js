import styled from 'styled-components'

export const HomeImgLogo = styled.img`
  height: 50px;
  width: 200px;
  margin: 20px;
  margin-left: 100px;
  @media screen and (max-width: 768px) {
    margin-left: 50px;
  }
`
export const CardOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 50px;
  font-weight: 500;
  color: #334155;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #475569;
  margin-top: -10px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const RegisterButton = styled.button`
  height: 40px;
  width: 110px;
  border-radius: 7px;
  border: none;
  background-color: #3b82f6;
  color: white;
  font-family: 'Roboto';
  padding: 10px;
  font-weight: 500;
`
export const MeetImg = styled.img`
  height: 350px;
  width: 800px;
  margin: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 250px;
  }
`
export const HeadTwo = styled.h1`
  color: #2563eb;
  font-size: 50px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const ParaTwo = styled.p`
  color: #334155;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: -10px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
