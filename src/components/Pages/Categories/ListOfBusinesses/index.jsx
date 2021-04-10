import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import { useFindBusinessesByCaterory } from '@src/hooks/useAgremiadosData';
import { Title, Container } from './styles';
import Business from '../Business';

export default () => {
  const { id } = useParams();
  const { listOfBusinesses } = useFindBusinessesByCaterory(id);
  console.log(listOfBusinesses.businesses);
  const data =
    listOfBusinesses.businesses != undefined ? listOfBusinesses.businesses : [];
  return (
    <>
      <Title>{listOfBusinesses.name}</Title>
      <Container>
        {data.map((data) => (
          <Business key={data.id} name={data.name} />
        ))}
      </Container>
    </>
  );
};
