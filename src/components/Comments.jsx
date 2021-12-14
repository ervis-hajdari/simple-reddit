import React from "react";
import { useNavigate } from "react-router";

import { useComments, usePosts } from "../hooks";
import { CheckVotes, Container, SeparatedDetails } from "./elements";

const Comments = () => {
  const navigate = useNavigate();

  const [postLoading, singlePostData, postError] = usePosts();
  const [commentsLoading, commentsData, commentsError] = useComments();

  return (
    <div className="p-30 m-auto" style={{ width: "50%" }}>
      <div>
        <Container>
          <CheckVotes
            likes={12}
            currentVote={"neutral"}
            onDownVote={() => console.log("down")}
            onUpVote={() => console.log("up")}
          />

          <SeparatedDetails
            onClick={() => navigate(`${singlePostData.id}/comments`)}
            title={singlePostData.title}
            description={singlePostData.body}
            details={{
              user: singlePostData.user,
              createdAt: singlePostData.createdAt,
            }}
          />
        </Container>
      </div>
      <div className="px-64">
        <div className="py-20 text-light-gray">Comments</div>
        {commentsData.map((comment, ind) => (
          <div className="mb-30">
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
