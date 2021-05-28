import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Container } from 'app/components'

const BannerStyles = styled.section`
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, purple, blue);
  color: var(--black);

  .banner__inner {
    padding: 4rem 0;
  }
  
`;

export const AdvertBanner = ({ header, subheader, path }) => {
  return (
    <Link to={path}>
      <BannerStyles>
        <Container className="banner__inner">
          <h2>{header}</h2>
          <p>{subheader}</p>
        </Container>
      </BannerStyles>
    </Link>
  )
}
