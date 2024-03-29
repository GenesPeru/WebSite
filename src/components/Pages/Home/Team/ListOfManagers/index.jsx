import React from 'react';
import { useManagersData } from '@src/hooks/useManagersData';
import { Container } from './styles';
import Manager from '@pages/Home/Team/Manager';

export default () => {
  const { managers } = useManagersData();
  return (
    <Container>
      {managers.map((manager) => (
        <Manager
          key={manager.id}
          name={manager.name}
          role={manager.role}
          lastName={manager.lastName}
          image={manager.photoUrl}
        />
      ))}
    </Container>
  );
};
