import { useEffect, useState } from 'react';

export const useManagersData = () => {
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
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
  }, []);

  return { error, loading, managers };
};
