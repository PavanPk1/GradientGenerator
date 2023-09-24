import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.color1}, ${props.color2})`};
`
export const InnerContainer = styled(MainContainer)`
  width: 80%;
  flex-direction: column;
  height: 80vh;
`

export const Heading = styled.h1`
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const ChooseDirection = styled.p`
  color: #ededed;
  font-size: 24px;
  font-family: 'Roboto';
`

export const PickColors = styled(ChooseDirection)`
  font-weight: 600;
`

export const GradientDirectionList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
  width: 100%;
`

export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  width: 120px;
  color: #1e293b;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  border: 0;
  margin-top: 15px;
`

export const Label = styled.p`
  color: #ffffff;
  font-size: 18px;
`

export const InputEl = styled.input`
  outline: none;
  border: 0;
  background-color: transparent;
  width: 120px;
  height: 45px;
`
export const ColorsInputContainer = styled.div`
  display: flex;
`
export const InputContainer = styled(ColorsInputContainer)`
  flex-direction: column;
  align-items: center;
  line-height: 3;
`
