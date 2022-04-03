/*
 Creates ellipsis string based on length
*/
export const nameEllipsis = (name: unknown, length = 10): string => {
  if (typeof name !== 'string') {
    return name as string;
  }
  return name.length > length ? name.substring(0, length - 3).concat('...') : name;
};