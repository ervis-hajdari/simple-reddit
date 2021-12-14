import React, { Children } from "react";
import TimeAgo from "react-timeago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Container = ({
  title,
  description,
  details,
  onClick,
  likes,
  onVoteClick,
  children,
}) => {
  return (
    <div className="border-gray radius-1 flex" onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
