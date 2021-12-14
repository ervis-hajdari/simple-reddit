import React from "react";
import { useNavigate } from "react-router";

import { Container, SeparatedDetails } from "./elements";

import { useSubreddis } from "../hooks";

const Subreddis = () => {
  const navigate = useNavigate();

  const [loading, data, error] = useSubreddis();

  return (
    <div className="grid p-38">
      {data.map((reddit, ind) => (
        <Container key={ind} onClick={() => navigate(`/r/${reddit.id}`)}>
          <SeparatedDetails
            title={reddit.title}
            description={reddit.description}
          />
        </Container>
      ))}
    </div>
  );
};

export default Subreddis;
