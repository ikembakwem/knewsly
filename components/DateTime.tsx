export const DateTime = ({ date }: { date: string }) => {
  const dateString = new Date(date);
  const createdTime = dateString.toLocaleTimeString();
  const createdDate = dateString.toDateString();
  return (
    <div className="flex gap-1">
      <span>{createdTime}</span>
      <span>•</span>
      <span>{createdDate}</span>
    </div>
  );
};
