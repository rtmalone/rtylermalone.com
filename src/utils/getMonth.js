export function getMonth() {
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month === 1 || month === 2 || month === 12) {
    return "winter";
  } else if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else {
    return "autumn";
  }
}
