interface RangeOptions {
  min: number
  max: number
}

/**
 * Calculates the percentage a value is between a range
 * @param value Number we are calculating the percentage for
 * @param options Range options
 * @param options.min Lower range
 * @param options.max Upper range
 * @returns The percentage the value is between the min and max ranges
 */
const valuePercentageOfRange = (value: number, { min, max }: RangeOptions) =>
  ((value - min) / (max - min)) * 100

interface RoundOptions {
  multiple?: number
  min?: number
  max?: number
}

/**
 * Rounds value to nearest multiple (set in options)
 * @param value Number to be rounded
 * @param options Determines how to round value
 * @param options.multiple Multiple to round to (ex multiple of 10 means 6 rounds to 10)
 * @param options.min Value will never be rounded below minimum (default: 0)
 * @param options.max Value will never be rounded above maximum (default: 100)
 * @returns Rounded number
 */
const roundToNearest = (
  value: number,
  { multiple = 1, min = 0, max = 100 }: RoundOptions,
) => {
  const roundedValue = Math.round(value / multiple) * multiple
  if (roundedValue < min)
    return min
  if (roundedValue > max)
    return max
  return roundedValue
}

interface RandomOptions {
  min?: number
  max?: number
  round?: boolean
}

/**
 * Returns random number between optional min and max that default to 0 and 100.
 * Also has an option to return the value rounded to nearest integer.
 * @param options Random options
 * @param options.min Minimum value the randomized number can be (default: 0)
 * @param options.max Maximum value the randomized number can be (default: 100)
 * @param options.round True returns whole number while false allows decimals (default: false)
 * @returns Randomized number
 */
const randomNumber = ({ min = 0, max = 100, round = false }: RandomOptions) => {
  const randomValue = Math.random() * (max - min) + min
  return round ? Math.round(randomValue) : randomValue
}

interface CreateShuffledListOptions {
  length: number
  uniqueNumbers?: boolean
}

/**
 * Constructs and shuffles a list of numbers with an option for values to be unique.
 * @param options Shuffle options
 * @param options.length How long the list should be
 * @param options.uniqueNumbers If the list can contain duplicate numbers (default: true)
 * @returns Array of shuffled numbers
 */
const createShuffledList = ({
  length,
  uniqueNumbers = true,
}: CreateShuffledListOptions) => {
  if (uniqueNumbers) {
    return Array.from({ length })
      .map((value, index) => (value = index))
      .sort(() => Math.random() - 0.5)
  }
  return Array.from({ length }).map(_ => Math.ceil(Math.random() * length))
}

export {
  createShuffledList,
  randomNumber,
  roundToNearest,
  valuePercentageOfRange,
}
