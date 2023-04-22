import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ProductCard from 'blocks/ProductCard';
import { selectFavorites } from 'features/Favorites/selectors';
import { PageWrapper } from 'App.styled';
import { ProductGroup, ProductGroupContainer } from './styled';
import { I_ProductDetails } from 'pages/types';
import { I_UniRes } from 'types';
import { get } from 'helpers/request';

const HomePage: React.FC = () => {
  const idsInFavorites = useSelector(selectFavorites);

  const [products, setProducts] = useState<I_ProductDetails[]>([]);

  useEffect(() => {
    (async () => {
      const res: I_UniRes = await get('/products');
      setProducts(res.data as I_ProductDetails[]);
    })();
  }, []);

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>Main - Marketplace</title>
      </Helmet>

      <PageWrapper>
        <ProductGroup>
          <h2>Recommended Products</h2>

          <ProductGroupContainer>
            {products.map((p) => (
              <ProductCard
                {...p}
                key={p.id}
                isLiked={idsInFavorites.includes(p.id)}
                image={p.image}
              />
            ))}
          </ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  );
};

export default HomePage;
