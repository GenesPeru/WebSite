import React from 'react';
import Team from '../Team';
import { Link } from 'react-router-dom';
import { useVolunteersData } from '@src/hooks/useVolunteersData';
import { Title, Container } from './styles';

export default () => {
  const { teams = [] } = useVolunteersData();

  return (
    <main>
      <Title>Voluntariado</Title>
      <Container>
        {teams.map((team) => (
          <Link key={team.id} to={`/voluntariado/${team.id}`}>
            <Team name={team.name} semester={team.semester} />
          </Link>
        ))}
      </Container>
    </main>
  );
};
