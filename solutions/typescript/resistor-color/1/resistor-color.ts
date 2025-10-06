export const COLORS = [
  "black",
  "brown", 
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const colorCode = (color: string): number => {
  const index = COLORS.findIndex(c => 
    c.toLowerCase() === color.toLowerCase()
  );
  
  if (index === -1) {
    throw new Error(`Unknown color: ${color}`);
  }
  
  return index;
};