import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const PreferenceAction = ({ type, preference, onClick }) => {
  const voteColors = {
    like: "#6dc16d",
    dislike: "#ca7979",
    neutral: "#bdbbbb",
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      <FontAwesomeIcon
        icon={type === "like" ? faArrowUp : faArrowDown}
        color={preference[type] ? voteColors[type] : voteColors.neutral}
        className="icon-size"
      />
    </div>
  );
};

const CheckVotes = ({ likes }) => {
  const [currentPreference, setCurrentPreference] = React.useState({
    like: false,
    dislike: false,
    value: 0,
  });

  React.useEffect(() => {
    setCurrentPreference((prev) => ({ ...prev, value: likes }));
  }, [likes]);

  return (
    <div className="py-22 pl-30 flex column align-center justify-between">
      <PreferenceAction
        type="like"
        preference={currentPreference}
        onClick={() =>
          setCurrentPreference((prev) => ({
            like: !prev.like,
            dislike: false,
            value: !prev.like ? likes + 1 : likes,
          }))
        }
      />
      <div>
        <span>{currentPreference.value}</span>
      </div>
      <PreferenceAction
        type="dislike"
        preference={currentPreference}
        onClick={() =>
          setCurrentPreference((prev) => ({
            like: false,
            dislike: !prev.dislike,
            value: !prev.dislike ? likes - 1 : likes,
          }))
        }
      />
    </div>
  );
};

export default CheckVotes;
