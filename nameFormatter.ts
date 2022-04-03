/*
    Format names(Uppercase first letter, remove underscores)
*/
export const nameFormatter = (name: unknown): string => {
  if (typeof name !== 'string') {
    return String(name);
  }
  return name
    .toLowerCase()
    .split('_')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
};