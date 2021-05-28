import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import { Container } from 'app/components'

import UserIcon from 'app/assets/icons/user.svg'
import HeartIcon from 'app/assets/icons/heart.svg'
import CartIcon from 'app/assets/icons/shopping-cart.svg'

const HeaderStyles = styled.header``;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  height: 100%;
  border-bottom: 1px solid var(--black);
  
  .header__top--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const HeaderBottom = styled.div`
  padding: 1rem 0;
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <HeaderTop>
        <Container className="header__top--container">
          <Link to="/" className="logo">E-Commerce</Link>
          <Link to="/men">Mens</Link>
          <Link to="/women">Women</Link>
          <input type="search" name="" id="" />
          <nav className="account">
            <Link to="/my-account">
              <img src={UserIcon} alt="user" className="icon" />
            </Link>
            <Link to="/favourites">
              <img src={HeartIcon} alt="heart" className="icon" />
            </Link>
            <Link to="/cart">
              <img src={CartIcon} alt="cart" className="icon" />
            </Link>
          </nav>
        </Container>
      </HeaderTop>

      <HeaderBottom>
        <Container className="header__bottom--container">
          <nav>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
          </nav>
        </Container>
      </HeaderBottom>

    </HeaderStyles>
  )
}
