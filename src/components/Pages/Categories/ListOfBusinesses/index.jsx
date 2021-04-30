import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useFindBusinessesByCaterory } from '@src/hooks/useAgremiadosData';
import { Title, Container } from './styles';
import Business from '../Business';
import { Context } from '@src/Context';

export default () => {
  const { id } = useParams();
  const { categories } = useContext(Context);
  return (
    <>
      <Title>{categories[id - 1].name}</Title>
      <Container>
        {categories[id - 1].businesses.map((data) => (
          <Business key={data.id} name={data.name} image={data.imageUrl} />
        ))}
      </Container>
    </>
  );
};
