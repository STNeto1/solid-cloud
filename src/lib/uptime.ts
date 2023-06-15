export const uptimeFn = (seconds: number, perc: number) => {
  const uptimeRatio = perc / 100;
  const uptimeInSeconds = seconds * uptimeRatio;
  return uptimeInSeconds;
};

export const formatTime = (seconds: number): string => {
  if (seconds <= 0) {
    return "0 seconds";
  }

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const timeParts: string[] = [];

  if (days > 0) {
    const dayString = days === 1 ? "1 day" : `${days} days`;
    timeParts.push(dayString);
  }

  if (hours > 0) {
    const hourString = hours === 1 ? "1 hour" : `${hours} hours`;
    timeParts.push(hourString);
  }

  if (minutes > 0) {
    const minuteString = minutes === 1 ? "1 minute" : `${minutes} minutes`;
    timeParts.push(minuteString);
  }

  if (remainingSeconds > 0) {
    const secondString =
      remainingSeconds === 1
        ? "1 second"
        : `${remainingSeconds.toFixed(0)} seconds`;
    timeParts.push(secondString);
  }

  return timeParts.join(", ");
};
