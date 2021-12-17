import React, { SetStateAction } from "react";
import { useDispatch } from "react-redux";

import { useComments, useSinglePost } from "../hooks";
import { CheckVotes, Container, SeparatedDetails } from "./elements";

import { setHeaderDescriber } from "../core/reducers/header";
import { PageProps } from "../interfaces/page";

const Comments: React.FC<PageProps> = ({ pageStates, setPageState }) => {
  const dispatch = useDispatch();

  const [postFetching, postData, postError] = useSinglePost();
  const [commentsFetching, commentsData, commentsError] = useComments();

  React.useEffect(() => {
    dispatch(
      setHeaderDescriber({ title: postData.title, byUser: postData.user })
    );
  }, [postData]);

  React.useEffect(() => {
    if (pageStates === undefined || setPageState === undefined)
      return console.error("Props are missing in the component");

    if (postError || commentsError) return setPageState(pageStates.error);

    if (!postFetching && !commentsFetching) setPageState(pageStates.neutral);
  }, [postFetching, commentsFetching]);

  return (
    <div
      className="p-30 m-auto"
      style={{
        width: "100%",
        maxWidth: 900,
      }}
    >
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
      <div className="m-auto mobile-full-width" style={{ width: "86%" }}>
        <div className="py-20 text-light-gray">Comments</div>
        {commentsData.map(
          (
            comment: { body: string; name: string; createdAt: string },
            ind: number
          ) => (
            <div className="mb-30" key={ind}>
              <Container>
                <SeparatedDetails
                  key={ind}
                  description={comment.body}
                  details={{ user: comment.name, createdAt: comment.createdAt }}
                />
              </Container>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Comments;
