import { Suspense } from 'react';

import PublicRoutes from 'routes/PublicRoutes';
// import PrivateRoutes from 'routes/PrivateRoutes'
import Header from 'features/Header';
import { AppStyles, Footer } from 'App.styled';

export const App = () => {
  return (
    <>
      <AppStyles />

      <Header />

      <Suspense fallback={'Loading...'}>
        <PublicRoutes />
        {/* <PrivateRoustes /> */}
      </Suspense>

      <Footer>
        <div>© 2023. All rights reserved.</div>
      </Footer>
    </>
  );
};

export default App;
