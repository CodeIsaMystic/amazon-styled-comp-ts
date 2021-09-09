import styled from "styled-components"
import { PageText as MenuText } from "../../utils/helpers/PageText"
import { PageItemWrapper as MenuItemWrapper } from "../../utils/helpers/ItemWrapper"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0.3em;
  background-color: #232f3e;
`

export const Text = styled(MenuText)`
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};
  margin-right: 1em;
  border: 1px solid #232f3e;
  padding: 0.5em 0.1em;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`
export const LeftText = styled(Text)`
  @media (max-width: 850px) {
    display: block;
  }
`

export const Wrapper = styled(MenuItemWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
`
