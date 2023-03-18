import { Time } from "./styles";

export const DateTime = ({ date }) => {
  const dateString = new Date(date);
  const createdTime = dateString.toLocaleTimeString();
  const createdDate = dateString.toDateString();
  return (
    <Time>
      <span>{createdTime}</span>
      <span>•</span>
      <span>{createdDate}</span>
    </Time>
  );
};
