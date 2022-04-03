export const getDateFromString = (dateString: string): Date | null => {
  if (dateString === '' || dateString === null || dateString === undefined) {
    return null;
  }
  // Input format "%Y-%m-%d %H:%M:%S%f"
  const yyyy = parseInt(dateString.substr(0, 4), 10);
  const mm = parseInt(dateString.substr(5, 6), 10) - 1;
  const dd = parseInt(dateString.substr(8, 9), 10);
  const hh = parseInt(dateString.substr(11, 12), 10);
  const m = parseInt(dateString.substr(14, 15), 10);
  const ss = parseInt(dateString.substr(17, 18), 10);
  return new Date(Date.UTC(yyyy, mm, dd, hh, m, ss));
};

export const dateSorter = (date1: Date | null, date2: Date | null): number => {
  if (date1 === date2) {
    return 0;
  }
  if (date1 === null) {
    return 1;
  }
  if (date2 === null) {
    return -1;
  }
  if (date1 > date2) {
    return 1;
  }
  return -1;
};
