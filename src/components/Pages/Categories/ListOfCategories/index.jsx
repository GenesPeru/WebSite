import React from 'react';
import { Container, LinkCategory } from './styles';
import { useCategoriesData } from '@src/hooks/useAgremiadosData';
import Category from '@pages/Categories/Category';
import Loader from '@components/Loader';

export default () => {
  const { categories, loading } = useCategoriesData();
  return (
    <>
      {loading && <Loader content='true' />}
      <Container>
        {categories.map((category) => (
          <LinkCategory to={`/categorias/${category.id}`} key={category.id}>
            <Category name={category.name} image={category.imageUrl} />
          </LinkCategory>
        ))}
      </Container>
    </>
  );
};
