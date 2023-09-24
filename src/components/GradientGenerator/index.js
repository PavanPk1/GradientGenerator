import {Component} from 'react'
import {
  Heading,
  MainContainer,
  InnerContainer,
  ChooseDirection,
  GradientDirectionList,
  PickColors,
  Label,
  InputEl,
  GenerateBtn,
  ColorsInputContainer,
  InputContainer,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    directionValue: gradientDirectionsList[0].value,
    gradientColorInputOne: '#8ae323',
    gradientColorInputTwo: '#014f7b',
    color1: '#8ae323',
    color2: '#014f7b',
  }

  onClickGenerate = () => {
    const {gradientColorInputOne, gradientColorInputTwo} = this.state
    this.setState({
      color1: gradientColorInputOne,
      color2: gradientColorInputTwo,
    })
  }

  onChangeDirectionValue = event => {
    this.setState({directionValue: event.target.id})
  }

  changeGradientColorOne = event => {
    this.setState({gradientColorInputOne: event.target.value})
  }

  changeGradientColorTwo = event => {
    this.setState({gradientColorInputTwo: event.target.value})
  }

  renderGradientDirectionLists = () => {
    const {directionValue} = this.state
    return (
      <GradientDirectionList>
        {gradientDirectionsList.map(item => (
          <GradientDirectionItem
            key={item.directionId}
            activeBtn={directionValue === item.value}
            onClickDirectionChange={this.onChangeDirectionValue}
            directionDetails={item}
          />
        ))}
      </GradientDirectionList>
    )
  }

  renderColorInputs = () => {
    const {gradientColorInputOne, gradientColorInputTwo} = this.state
    return (
      <ColorsInputContainer>
        <InputContainer>
          <Label htmlFor="input1">{gradientColorInputOne}</Label>
          <InputEl
            type="color"
            id="input1"
            value={gradientColorInputOne}
            onChange={this.changeGradientColorOne}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="input1">{gradientColorInputTwo}</Label>
          <InputEl
            type="color"
            id="input1"
            value={gradientColorInputTwo}
            onChange={this.changeGradientColorTwo}
          />
        </InputContainer>
      </ColorsInputContainer>
    )
  }

  render() {
    const {directionValue, color1, color2} = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        direction={directionValue}
        color1={color1}
        color2={color2}
      >
        <InnerContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <ChooseDirection>Choose Direction</ChooseDirection>
          {this.renderGradientDirectionLists()}
          <PickColors>Pick the Colors</PickColors>

          {this.renderColorInputs()}
          <GenerateBtn onClick={this.onClickGenerate}>Generate</GenerateBtn>
        </InnerContainer>
      </MainContainer>
    )
  }
}
export default GradientGenerator
