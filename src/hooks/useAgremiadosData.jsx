import { useEffect, useState } from 'react';
import { Context } from '@src/Context';
import { useContext } from 'react';

export const useCategoriesData = () => {
  const { categories, handleCategories } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    if (categories.length === 0) {
      setLoading(true);

      window
        .fetch('https://genes-api.herokuapp.com/categories')
        .then((res) => res.json())
        .then((categories) => {
          handleCategories(categories, undefined);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { error, loading, categories };
};
