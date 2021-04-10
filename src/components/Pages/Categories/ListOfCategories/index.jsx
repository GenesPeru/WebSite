import React from 'react';
import { Container } from './styles';
import { useCategoriesData } from '@src/hooks/useAgremiadosData';
import Category from '../Category';
import { Link } from 'react-router-dom';

export default () => {
  const { categories = [] } = useCategoriesData();
  console.log(categories);

  return (
    <>
      <Container>
        {categories.map((category) => (
          <Link to={`/categorias/${category.id}`} key={category.id}>
            <Category name={category.name} image={category.imageUrl} />
          </Link>
        ))}
      </Container>
    </>
  );
};
