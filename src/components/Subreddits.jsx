import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Container, SeparatedDetails } from "./elements";

import Loading from "react-loading";

import { useSubreddits, useVisibilityChecker } from "../hooks";

import { setHeaderDescriber } from "../core/reducers/header";

const Subreddits = ({ setLoading }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const ref = React.useRef();

  const [page, setPage] = React.useState(1);
  const [fetching, data, noMoreData, error] = useSubreddits(page);

  const lastElementIsVisible = useVisibilityChecker(ref);

  React.useEffect(() => {
    dispatch(setHeaderDescriber("subreddits"));
  }, []);

  React.useEffect(() => {
    if (noMoreData) return;

    if (lastElementIsVisible) setPage((prev) => prev + 1);
  }, [lastElementIsVisible, data]);

  React.useEffect(() => {
    setLoading(false);
  }, [fetching]);

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
      {
        <div ref={ref} className="flex-center">
          {!noMoreData ? (
            <Loading type="spin" width="40px" color="lightgray" />
          ) : (
            "You've reached the end"
          )}
        </div>
      }
    </div>
  );
};

export default Subreddits;
