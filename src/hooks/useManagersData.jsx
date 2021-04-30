import { useEffect, useState } from 'react';
import { Context } from '@src/Context';
import { useContext } from 'react';

export const useManagersData = () => {
  const { managers, setManagers } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    if (managers.length === 0) {
      setLoading(true);
      window
        .fetch('https://genes-api.herokuapp.com/managers')
        .then((res) => res.json())
        .then((managers) => {
          setManagers(managers);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { error, loading, managers };
};
