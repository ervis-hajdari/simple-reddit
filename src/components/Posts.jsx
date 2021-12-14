import React from "react";
import { useParams, useNavigate } from "react-router";

import Select from "react-select";

import { usePosts, useSubreddis } from "../hooks";
import { CheckVotes, Container, SeparatedDetails } from "./elements";

const Posts = () => {
  const options = [
    { value: "title", label: "Title" },
    { value: "date", label: "Date" },
  ];

  const navigate = useNavigate();

  const [sortPosts, setSortPosts] = React.useState("");

  const [status, postsData, error] = usePosts(sortPosts);
  const [st, subData, subError] = useSubreddis();

  return (
    <div className="p-40 flex">
      <div
        className="flex-column"
        style={{
          flex: 1,
        }}
      >
        <div className="flex justify-end align-center">
          <span className="mr-18">Sort by</span>{" "}
          <Select
            options={options}
            defaultValue={options[1]}
            onChange={(value) => setSortPosts(value.value)}
          />
        </div>
        <div
          className="mt-30 flex-column"
          style={{
            width: "100%",
          }}
        >
          {postsData.map((post, ind) => (
            <div key={ind} className="pb-30 ml-auto" style={{ width: "65%" }}>
              <div>
                <Container key={ind}>
                  <CheckVotes
                    likes={12}
                    currentVote={"neutral"}
                    onDownVote={() => console.log("down")}
                    onUpVote={() => console.log("up")}
                  />

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
        </div>
      </div>

      <div style={{ width: 60 }} />
      <div style={{ width: "25%" }}>
        <Container>
          <SeparatedDetails
            title={subData.title}
            description={subData.description}
            details={{ user: subData.admin, createdAt: subData.createdAt }}
          />
        </Container>
      </div>
    </div>
  );
};

export default Posts;
