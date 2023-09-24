import styled from 'styled-components'

export const ListItem = styled.li`
  width: 120px;
  list-style-type: none;
`
export const Controllers = styled.button`
  color: ${props => (props.activeBtn ? '#334155' : '#1e293b')};
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  padding: 10px;
  border: 0;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  cursor: pointer;
  background-color: #ffffff;
  opacity: ${props => (props.activeBtn ? 1 : 0.5)};
`
