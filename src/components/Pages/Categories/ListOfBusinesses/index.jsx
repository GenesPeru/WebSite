import React from "react";
import { useParams } from "react-router-dom";
import { Title, Container } from "./styles";
import Business from "@pages/Categories/Business";
import Loader from "@components/Loader";
import { useCategoriesData } from "@src/hooks/useAgremiadosData";

export default () => {
  const { id } = useParams();
  const { categories, loading } = useCategoriesData();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Title>{categories[id - 1]?.name}</Title>
          <Container>
            {categories[id - 1]?.businesses.map((data) => (
              <Business key={data.id} name={data.name} image={data.imageUrl} />
            ))}
          </Container>
        </>
      )}
    </>
  );
};
/*

      */
