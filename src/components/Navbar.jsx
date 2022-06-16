import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../redux/apiCalls"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LeftIcon = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

const SearchIconContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const dispatch = useDispatch();

  const quantity = useSelector(state => state.cart.quantity)
  function logOut() {
    console.log('I have been clicked');
    logout(dispatch)
    // .then(console.log('Sended Info to APICALLS'))

  }
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <LeftIcon title='Log Out'
            onClick={logOut}
          >
            <LogoutIcon />
          </LeftIcon>
          <SearchIconContainer>
            <Input placeholder="SearchIcon" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            {/* /NEED TO MAKE THIS WORK TO REDIRECT TO /products/all OR TO A ITEM WITH THAT NAME */}
          </SearchIconContainer>
        </Left>
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
          <Center title="Home">
            <Logo>LAMA.</Logo>
          </Center>
        </Link>
        <Right>
          <Link to='/register' style={{ textDecoration: 'none' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem title="Cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container >
  );
};

export default Navbar;