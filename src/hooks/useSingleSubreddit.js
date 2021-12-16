import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

const useSingleSubreddit = () => {
  const { subredditID } = useParams();

  const [fetching, setFetching] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [noMoreData, setNoMoreData] = React.useState(false);
  const [error, setError] = React.useState(false);

  const baseURL = "https://6040c786f34cf600173c8cb7.mockapi.io/subreddits";

  const asyncFetch = async () => {
    try {
      const response = await axios.get(baseURL + `/${subredditID}`);
      const data = await response.data;

      setData(data);

      setFetching(false);
    } catch (e) {
      setError(true);
      setFetching(false);
    }
  };

  React.useEffect(() => {
    asyncFetch();
  }, []);

  return [fetching, data, noMoreData, error];
};

export default useSingleSubreddit;
