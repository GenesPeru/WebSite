import React from 'react';
import { useParams } from 'react-router-dom';
import { useFindBusinessesByCaterory } from '@src/hooks/useAgremiadosData';
import { Title, Container } from './styles';
import Business from '../Business';

export default () => {
  const { id } = useParams();
  const { listOfBusinesses } = useFindBusinessesByCaterory(id);
  const data =
    listOfBusinesses.businesses != undefined ? listOfBusinesses.businesses : [];
  console.log(data);
  return (
    <>
      <Title>{listOfBusinesses.name}</Title>
      <Container>
        {data.map((data) => (
          <Business key={data.id} name={data.name} image={data.imageUrl} />
        ))}
      </Container>
    </>
  );
};
