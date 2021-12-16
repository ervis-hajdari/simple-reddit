import React from "react";
import { useDispatch } from "react-redux";

import { useComments, usePosts, useSinglePost } from "../hooks";
import { CheckVotes, Container, SeparatedDetails } from "./elements";

import { setHeaderDescriber } from "../core/reducers/header";

const Comments = ({ setLoading }) => {
  const dispatch = useDispatch();

  const [postFetching, postData, postError] = useSinglePost();
  const [commentsFetching, commentsData, commentsError] = useComments();

  React.useEffect(() => {
    dispatch(setHeaderDescriber(`${postData.title}`, postData.user));
  }, [postData]);

  React.useEffect(() => {
    if (!postFetching && !commentsFetching) setLoading(false);
  }, [postFetching, commentsFetching]);

  return (
    <div className="p-30 m-auto" style={{ width: "50%" }}>
      <div>
        <Container>
          <CheckVotes likes={postData.upvotes} />

          <SeparatedDetails
            title={postData.title}
            description={postData.body}
            details={{
              user: postData.user,
              createdAt: postData.createdAt,
            }}
          />
        </Container>
      </div>
      <div className="px-64">
        <div className="py-20 text-light-gray">Comments</div>
        {commentsData.map((comment, ind) => (
          <div className="mb-30" key={ind}>
            <Container>
              <SeparatedDetails
                key={ind}
                description={comment.body}
                details={{ user: comment.name, createdAt: comment.createdAt }}
              />
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
