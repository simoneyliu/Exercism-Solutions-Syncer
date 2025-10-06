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

export function findColorIndex(color: string): number {
  const index = COLORS.findIndex(c => c.toLowerCase() === color.toLowerCase());
  if (index === -1) {
    throw new Error(`Unknown color: ${color}`);
  }
  return index;
}

export function decodedValue(colors: string[]): number {
  const firstDigit = findColorIndex(colors[0]);
  const secondDigit = findColorIndex(colors[1]);
  return firstDigit * 10 + secondDigit;
}