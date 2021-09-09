import React from "react"
import { Container, Wrapper, Text, LeftText } from "./MenuTopbar.styles"
import { Menu } from "@material-ui/icons"

const MenuTopbar: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Wrapper>
            <Menu />
            <Text>All</Text>
          </Wrapper>

          <Wrapper>
            <Text>Today's Deals</Text>
            <Text>Customer Service</Text>
            <Text>Gift Cards</Text>
            <Text>Sell</Text>
            <Text>Registry</Text>
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <LeftText>Amazon's response to COVID-19</LeftText>
        </Wrapper>
      </Container>
    </div>
  )
}

export default MenuTopbar
