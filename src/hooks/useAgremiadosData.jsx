import { useEffect, useState } from 'react';

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    setLoading(true);

    window
      .fetch('https://genes-api.herokuapp.com/categories')
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { error, loading, categories };
};

export const useFindBusinessesByCaterory = (id) => {
  const [listOfBusinesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    setLoading(true);

    window
      .fetch(`https://genes-api.herokuapp.com/categories/${id}`)
      .then((res) => res.json())
      .then((businesses) => {
        setBusinesses(businesses);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { error, loading, listOfBusinesses };
};
