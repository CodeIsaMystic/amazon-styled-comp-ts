import React from "react"
import {
  Container,
  Logo,
  Flag,
  Text,
  Wrapper,
  Searchbox,
  Select,
  SearchIconWrapper,
} from "./Navbar.styles"
import {
  ShoppingCartOutlined,
  SearchOutlined,
  ArrowDropDown,
  RoomOutlined,
} from "@material-ui/icons"
import logo from "../../assets/logo.png"
import flag from "../../assets/flag.png"

const Navbar: React.FC = () => {
  return (
    <div>
      <Container>
        <Logo src={logo} />

        <Wrapper flexDirection="row" alignItems="center">
          <RoomOutlined />

          <Wrapper>
            <Text fontSize=".7em">Deliver in</Text>
            <Text>USA</Text>
          </Wrapper>
        </Wrapper>

        {/* the search button */}
        <Select>
          <option value="All">All categories</option>
        </Select>
        <Searchbox />
        <SearchIconWrapper>
          <SearchOutlined />
        </SearchIconWrapper>

        {/* flag image */}
        <Wrapper flexDirection="row" alignItems="flex-start">
          <Flag src={flag} />
          <ArrowDropDown />
        </Wrapper>

        <Wrapper>
          <Text fontSize=".7em">Hello, Sign in</Text>
          <Wrapper flexDirection="row" alignItems="center">
            <Text>Account & Lists </Text>
            <ArrowDropDown />
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <Text fontSize=".7em">Returns</Text>
          <Text>& Orders</Text>
        </Wrapper>

        <Wrapper flexDirection="row" alignItems="flex-end">
          <Wrapper alignItems="center">
            <Text color="#ff9900" marginBottom="-.3em">
              0
            </Text>
            <ShoppingCartOutlined />
          </Wrapper>

          <Text marginBottom=".5em">Cart</Text>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar
