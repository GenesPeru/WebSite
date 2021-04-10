import { useEffect, useState } from 'react';

export const useVolunteersData = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    setLoading(true);

    window
      .fetch('https://genes-api.herokuapp.com/teams')
      .then((res) => res.json())
      .then((team) => {
        setTeams(team);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { error, loading, teams };
};

export const useFindVolunteersByTeam = (id) => {
  const [listOfVolunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    setLoading(true);

    window
      .fetch(`https://genes-api.herokuapp.com/teams/${id}`)
      .then((res) => res.json())
      .then((volunteers) => {
        setVolunteers(volunteers);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { error, loading, listOfVolunteers };
};
