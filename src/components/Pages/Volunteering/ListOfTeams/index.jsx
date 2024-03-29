import React from 'react';
import Team from '@pages/Volunteering/Team';
import { useVolunteersData } from '@src/hooks/useVolunteersData';
import { Title, Container, LinkTeam } from './styles';

export default () => {
  const { teams = [] } = useVolunteersData();
  return (
    <main>
      <Title>Voluntariado</Title>
      <Container>
        {teams.map((team) => (
          <LinkTeam key={team.id} to={`/voluntariado/${team.id}`}>
            <Team
              name={team.name}
              semester={team.semester}
              photo={team.photoUniversityUrl}
            />
          </LinkTeam>
        ))}
      </Container>
    </main>
  );
};
