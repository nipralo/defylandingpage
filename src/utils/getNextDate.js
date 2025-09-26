function getNextDate(dayNumber) {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday=0, Monday=1, ..., Saturday=6

  // Normalize dayNumber to always be between 0–6
  const targetDay = ((dayNumber % 7) + 7) % 7;

  // Calculate how many days until the target
  const daysUntilTarget = (targetDay - dayOfWeek + 7) % 7 || 7;

  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntilTarget);

  // Return the Date object instead of formatted string
  return nextDate;
}

export default getNextDate;
