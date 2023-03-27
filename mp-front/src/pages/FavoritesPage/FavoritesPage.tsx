import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import ProductCard from 'blocks/ProductCard';
import { selectFavorites } from 'features/Favorites/selectors';
import { dummyProducts } from 'pages/dummyProducts';
import { ProductGroupContainer } from './styled';
import { PageWrapper } from 'App.styled';

const FavoritesPage: React.FC = () => {
  const idsInFavorites = useSelector(selectFavorites);

  return (
    <>
      <Helmet>
        <title>Main - Market</title>
      </Helmet>

      <PageWrapper>
        <h2>Favorites</h2>

        {idsInFavorites.length ? (
          <ProductGroupContainer>
            {dummyProducts
              .filter((p) => idsInFavorites.includes(p.id))
              .map((p) => (
                <ProductCard
                  {...p}
                  key={p.id}
                  isLiked={false}
                  hideLikes={true}
                />
              ))}
          </ProductGroupContainer>
        ) : (
          <p>Nothing in my favourites yet</p>
        )}
      </PageWrapper>
    </>
  );
};

export default FavoritesPage;
