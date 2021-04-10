import React from 'react';
import { useParams } from 'react-router-dom';
import Volunteer from '../Volunteer';
import { useFindVolunteersByTeam } from '@src/hooks/useVolunteersData';
import { Title, Container, TitleCategory, Category } from './styles';

export default () => {
  const { id } = useParams();
  const { listOfVolunteers } = useFindVolunteersByTeam(id);
  console.log(listOfVolunteers);
  const volunteers =
    listOfVolunteers.volunteers != undefined ? listOfVolunteers.volunteers : [];

  const capa = volunteers.filter((vol) => vol.role == 'Capacitaciones');
  const market = volunteers.filter((vol) => vol.role == 'Marketplace');
  const develop = volunteers.filter((vol) => vol.role == 'Desarrollador');
  return (
    <main>
      <Title>Voluntariado {listOfVolunteers.semester}</Title>
      <Category>
        <TitleCategory>Capacitaciones</TitleCategory>
        <Container>
          {capa.map((volunteer) => {
            return (
              <Volunteer
                key={volunteer.id}
                name={volunteer.name}
                image={volunteer.photoUrl}
              />
            );
          })}
        </Container>
      </Category>

      <Category>
        <TitleCategory>Marketplace</TitleCategory>
        <Container>
          {market.map((volunteer) => {
            return (
              <Volunteer
                key={volunteer.id}
                name={volunteer.name}
                image={volunteer.photoUrl}
              />
            );
          })}
        </Container>
      </Category>

      <Category>
        <TitleCategory>Desarrolladores</TitleCategory>
        <Container>
          {develop.map((volunteer) => {
            return (
              <Volunteer
                key={volunteer.id}
                name={volunteer.name}
                image={volunteer.photoUrl}
              />
            );
          })}
        </Container>
      </Category>
    </main>
  );
};
