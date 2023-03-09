import { Helmet } from 'react-helmet';

import { PageWrapper } from 'App.styled';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Main - Marketplace</title>
      </Helmet>

      <PageWrapper>
        <h1>Main</h1>
      </PageWrapper>
    </>
  );
};

export default HomePage;
