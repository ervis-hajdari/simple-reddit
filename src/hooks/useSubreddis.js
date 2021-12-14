import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const useSubreddis = () => {
  const { subredditID } = useParams();

  const [fetching, setFetching] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const asyncFetch = async () => {
    try {
      const response = await axios.get(
        `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${
          subredditID ? subredditID : ""
        }`
      );
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

  console.log(data);

  return [fetching, data, error];
};

export default useSubreddis;
