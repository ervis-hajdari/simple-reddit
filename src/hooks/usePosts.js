import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const usePosts = (sortBy) => {
  const { subredditID, postID } = useParams();

  const [status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const postSortQuery = sortBy ? `?sortBy=${sortBy}` : "";

  const asyncFetch = async () => {
    try {
      const response = await axios.get(
        `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditID}/posts/${
          postID !== undefined ? postID : ""
        }${postSortQuery}`
      );
      const data = await response.data;

      setData(data);
    } catch (e) {
      setError(true);
    }
  };

  React.useEffect(() => asyncFetch(), [sortBy]);

  return [status, data, error];
};

export default usePosts;
