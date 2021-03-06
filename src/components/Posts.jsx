import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";

import Select from "react-select";

import { usePosts, useSingleSubreddit, useVisibilityChecker } from "../hooks";
import { CheckVotes, Container, SeparatedDetails } from "./elements";

import { setHeaderDescriber } from "../core/reducers/header";
import Loading from "react-loading";

const Posts = ({ pageStates, setPageState }) => {
  const dispatch = useDispatch();

  const options = [
    { value: "title", label: "Title" },
    { value: "date", label: "Date" },
  ];

  const navigate = useNavigate();
  const ref = React.useRef();

  const [sortPosts, setSortPosts] = React.useState("date");
  const [page, setPage] = React.useState(1);

  const lastElementIsVisible = useVisibilityChecker(ref);

  const [subredditFetching, subredditData, subredditError] =
    useSingleSubreddit();
  const [postsFetching, postsData, noMoreData, error] = usePosts(
    page,
    sortPosts
  );

  React.useEffect(() => {
    dispatch(
      setHeaderDescriber({
        title: `/r/${subredditData.title || ""}`,
        byUser: "",
      })
    );
  }, [subredditData]);

  React.useEffect(() => {
    if (subredditError || error) setPageState(pageStates.error);

    if (!subredditFetching && !postsFetching) setPageState(pageStates.neutral);
  }, [subredditFetching, postsFetching]);

  React.useEffect(() => {
    if (noMoreData) return;

    if (lastElementIsVisible) setPage((prev) => prev + 1);
  }, [lastElementIsVisible, postsData]);

  return (
    <div className="p-40 flex posts-size-medium">
      <div
        className="flex column"
        style={{
          flex: 1,
        }}
      >
        <div className="flex justify-end align-center">
          <span className="mr-18">Sort by</span>
          <Select
            options={options}
            defaultValue={options[1]}
            onChange={(value) => {
              setPage(1);
              setSortPosts(value.value);
            }}
          />
        </div>
        <div className="mt-30 flex column align-end">
          {postsData.map((post, ind) => (
            <div
              key={ind}
              className="pb-30"
              style={{ maxWidth: 750, width: "100%" }}
            >
              <div>
                <Container key={ind}>
                  <CheckVotes likes={post.upvotes} />

                  <SeparatedDetails
                    onClick={() => navigate(`${post.id}/comments`)}
                    title={post.title}
                    description={post.body}
                    details={{ user: post.user, createdAt: post.createdAt }}
                  />
                </Container>
              </div>
            </div>
          ))}
          <div ref={ref} className="flex-center">
            {!noMoreData ? (
              <Loading type="spin" width="40px" color="lightgray" />
            ) : (
              "You've reached the end"
            )}
          </div>
        </div>
      </div>

      <div style={{ width: 60 }} />
      <div className="pb-30" style={{ minWidth: 500 }}>
        <Container>
          <SeparatedDetails
            title={subredditData.title}
            description={subredditData.description}
            details={{
              user: subredditData.admin,
              createdAt: subredditData.createdAt,
            }}
          />
        </Container>
      </div>
    </div>
  );
};

export default Posts;
