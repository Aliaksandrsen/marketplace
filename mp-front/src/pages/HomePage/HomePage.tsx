import { Helmet } from 'react-helmet';

import { StyledDiv } from './styled';

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <StyledDiv>Main Page</StyledDiv>
    </>
  );
};

export default HomePage;
