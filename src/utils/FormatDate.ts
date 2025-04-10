export function getCurrentFormattedDate(date: string): string {
  const now = new Date(date);
  return now.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Australia/Brisbane",
    timeZoneName: "short",
  });
}

export default getCurrentFormattedDate;
