import { useEffect, useState } from 'react';
import { Context } from '@src/Context';
import { useContext } from 'react';

export const useVolunteersData = () => {
  const { teams, setTeams } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    if (teams.length === 0) {
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
    }
  }, []);

  return { error, loading, teams };
};
