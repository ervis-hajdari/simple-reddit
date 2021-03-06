import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const useSinglePost = () => {
  const { subredditID, postID } = useParams();

  const [fetching, setFeching] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const baseURL = "https://6040c786f34cf600173c8cb7.mockapi.io/subreddits";

  const asyncFetch = async () => {
    try {
      const response = await axios.get(
        baseURL + `/${subredditID}/posts/${postID}`
      );
      const data = await response.data;

      setData(data);

      setFeching(false);
    } catch (e) {
      setError(true);
      setFeching(false);
    }
  };

  React.useEffect(() => asyncFetch(), []);

  return [fetching, data, error];
};

export default useSinglePost;
