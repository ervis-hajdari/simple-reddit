import React from "react";
import TimeAgo from "react-timeago";

interface SeperatedDetailsProps {
  key?: any;
  title?: string;
  description?: string;
  details?: { createdAt: string; user: string };
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SeparatedDetails: React.FC<SeperatedDetailsProps> = ({
  title,
  description,
  details,
  onClick,
}) => {
  return (
    <div
      className="py-20 px-30 cursor-pointer"
      style={{ flex: 1 }}
      onClick={onClick}
    >
      {title && (
        <div>
          <h4 className="mb-14">{title}</h4>
        </div>
      )}
      {description && (
        <div>
          <span className="text-light-gray ">{description}</span>
        </div>
      )}
      {details && (
        <div className="mt-12 flex justify-between">
          <span className="text-light-gray">
            <small>
              <a href="#">/u/{details.user}</a>
            </small>
          </span>
          <span className="text-light-gray">
            <small>
              <TimeAgo date={details.createdAt} />
            </small>
          </span>
        </div>
      )}
    </div>
  );
};

export default SeparatedDetails;
