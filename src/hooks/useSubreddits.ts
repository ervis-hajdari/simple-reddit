import React from "react";
import axios from "axios";

const useSubreddits = (page: number) => {
  const [fetching, setFetching] = React.useState<boolean>(true);
  const [data, setData] = React.useState<object[] | any>([]);
  const [noMoreData, setNoMoreData] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const baseURL = "https://6040c786f34cf600173c8cb7.mockapi.io/subreddits";

  const asyncFetch = async () => {
    try {
      const response = await axios.get(baseURL + `?page=${page}&limit=10`);
      const data = await response.data;

      data.length === 0
        ? setNoMoreData(true)
        : setData((prev: object[]) => [...prev, ...data]);

      setFetching(false);
    } catch (e) {
      setError(true);
      setFetching(false);
    }
  };

  React.useEffect(() => {
    asyncFetch();
  }, [page]);

  return [fetching, data, noMoreData, error];
};

export default useSubreddits;
