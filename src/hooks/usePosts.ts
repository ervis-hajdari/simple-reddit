import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const usePosts = (page: number, sortBy: string) => {
  const { subredditID } = useParams();

  const [fetching, setFeching] = React.useState<boolean>(true);
  const [data, setData] = React.useState<object[] | any>([]);
  const [noMoreData, setNoMoreData] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const baseURL = "https://6040c786f34cf600173c8cb7.mockapi.io/subreddits";

  const asyncFetch = async () => {
    try {
      const response = await axios.get(
        baseURL + `/${subredditID}/posts?page=${page}&limit=10&sortBy=${sortBy}`
      );
      const data = await response.data;

      data.length === 0
        ? setNoMoreData(true)
        : setData((prev: object[]) => [...prev, ...data]);

      setFeching(false);
    } catch (e) {
      setError(true);
      setFeching(false);
    }
  };

  React.useEffect(() => setData([]), [sortBy]);

  React.useEffect(() => {
    asyncFetch();
  }, [sortBy, page]);

  return [fetching, data, noMoreData, error];
};

export default usePosts;
