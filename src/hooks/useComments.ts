import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const useComments = () => {
  const { subredditID, postID } = useParams();

  const [fetching, setFetching] = React.useState<boolean>(true);
  const [data, setData] = React.useState<object[]>([]);
  const [error, setError] = React.useState<boolean>(false);

  const asyncFetch = async () => {
    try {
      const response = await axios.get(
        `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditID}/posts/${postID}/comments`
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

  return [fetching, data, error];
};

export default useComments;
