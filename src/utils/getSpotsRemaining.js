/**
 * Get spots remaining for a batch, starting high and decreasing as target day approaches
 * @param {Date} targetDate - date of the batch
 * @param {string} batchName - batch identifier
 * @param {number} maxSpots - maximum spots per batch
 * @param {Date} currentDate - optional, defaults to today
 * @returns {number} spots remaining
 */
export function getSpotsRemaining(
  targetDate,
  batchName = "",
  maxSpots = 10,
  currentDate = new Date()
) {
  const today = new Date(currentDate);
  const target = new Date(targetDate);

  // 1️⃣ Calculate days remaining
  const diffTime = target - today; // milliseconds
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // round up

  // 2️⃣ Base spots from deterministic random per batch
  const batchSeed = batchName
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const randomBase = Math.abs(Math.sin(batchSeed) * 10000) % 1; // 0 <= x < 1

  // 3️⃣ Calculate dynamic spots based on days remaining
  // More days remaining → more spots, fewer days → fewer spots
  // Formula: spots = min(maxSpots, ceil(randomBase * maxSpots + diffDays))
  const spots = Math.min(
    maxSpots,
    Math.max(1, Math.floor(randomBase * maxSpots + diffDays))
  );

  return spots;
}

export default getSpotsRemaining;
