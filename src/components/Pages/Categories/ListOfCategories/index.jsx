import React from 'react';
import { Container, LinkCategory } from './styles';
import { useCategoriesData } from '@src/hooks/useAgremiadosData';
import Category from '../Category';

export default () => {
  const { categories = [] } = useCategoriesData();

  return (
    <>
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
