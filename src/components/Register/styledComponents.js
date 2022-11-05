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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }
`
export const RegisterImg = styled.img`
  height: 350px;
  width: 30%;
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-right: 10px;
    margin-left: 20px;
  }
`
export const InnerCardOne = styled.form`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 30%;
  }
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
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 15px;
`
export const InputField = styled.input`
  border: 1px solid #cbd5e1;
  height: 40px;
  width: 300px;
  padding: 10px;
  color: #475569;
  font-family: 'Roboto';
  border-radius: 7px;
  margin-bottom: 15px;
  outline: none;
`
export const SelectField = styled.select`
  border: 1px solid #cbd5e1;
  height: 40px;
  width: 300px;
  padding: 10px;
  color: #475569;
  font-family: 'Roboto';
  border-radius: 7px;
  margin-bottom: 15px;
  outline: none;
`
export const Button = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 7px;
  border: none;
  background-color: #3b82f6;
  color: white;
  font-family: 'Roboto';
  padding: 10px;
  font-weight: 500;
  margin-top: 20px;
`
export const Para = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  margin-top: 15px;
`
