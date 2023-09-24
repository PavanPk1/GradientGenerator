import {ListItem, Controllers} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeBtn, directionDetails, onClickDirectionChange} = props
  return (
    <ListItem>
      <Controllers
        id={directionDetails.value}
        onClick={onClickDirectionChange}
        activeBtn={activeBtn}
      >
        {directionDetails.displayText}
      </Controllers>
    </ListItem>
  )
}

export default GradientDirectionItem
