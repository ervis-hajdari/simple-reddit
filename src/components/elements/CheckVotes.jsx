import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CheckVotes = ({ likes }) => {
  const voteColors = {
    upvote: "#6dc16d",
    downvote: "#ca7979",
    neutral: "#bdbbbb",
  };

  const [currentPreference, setCurrentPreference] = React.useState({
    like: false,
    dislike: false,
    value: likes,
  });

  const onUpVote = () => {
    if (currentPreference.like)
      return setCurrentPreference({
        like: false,
        dislike: false,
        value: likes,
      });

    setCurrentPreference({ like: true, dislike: false, value: likes + 1 });
  };

  const onDownVote = () => {
    if (currentPreference.dislike)
      return setCurrentPreference({
        like: false,
        dislike: false,
        value: likes,
      });

    setCurrentPreference({ like: false, dislike: true, value: likes - 1 });
  };

  return (
    <div className="py-22 pl-30 flex column align-center justify-between">
      <div onClick={onUpVote} className="cursor-pointer">
        <FontAwesomeIcon
          icon={faArrowUp}
          color={
            currentPreference.like ? voteColors.upvote : voteColors.neutral
          }
          className="icon-size"
        />
      </div>
      <div>
        <span>{currentPreference.value}</span>
      </div>
      <div onClick={onDownVote} className="cursor-pointer">
        <FontAwesomeIcon
          icon={faArrowDown}
          color={
            currentPreference.dislike ? voteColors.downvote : voteColors.neutral
          }
          className="icon-size"
        />
      </div>
    </div>
  );
};

export default CheckVotes;
