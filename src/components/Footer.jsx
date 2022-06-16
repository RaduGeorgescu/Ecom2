import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/" style={{ textDecoration: 'none', color: "black" }}>
            Home
          </Link></ListItem>
          <ListItem><Link to="/cart" style={{ textDecoration: 'none', color: "black" }}>
            Cart
          </Link></ListItem>
          <ListItem><Link to="/products/men" style={{ textDecoration: 'none', color: "black" }}>
            Man Fashion
          </Link></ListItem>
          <ListItem><Link to="/products/women" style={{ textDecoration: 'none', color: "black" }}>
            Woman Fashion
          </Link></ListItem>
          <ListItem><Link to="/products/accessories" style={{ textDecoration: 'none', color: "black" }}>
            Accessories
          </Link></ListItem>
          <ListItem><Link to="/" style={{ textDecoration: 'none', color: "black" }}>
            My Account
          </Link></ListItem>
          <ListItem><Link to="/" style={{ textDecoration: 'none', color: "black" }}>
            Order Tracking
          </Link></ListItem>
          <ListItem><Link to="/wishlist" style={{ textDecoration: 'none', color: "black" }}>
            Wishlist
          </Link></ListItem>
          <ListItem><Link to="/products/all" style={{ textDecoration: 'none', color: "black" }}>
            Shopping
          </Link></ListItem>
          <ListItem><Link to="/" style={{ textDecoration: 'none', color: "black" }}>
            Terms
          </Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        {/* <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
        </ContactItem> */}
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;