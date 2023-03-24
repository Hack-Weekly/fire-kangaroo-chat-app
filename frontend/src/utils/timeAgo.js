/**
 * Converts a datetime into someting like "1 hour ago".
 * @param {*} input - a Date object or a value that can be converted into a Date object.
 * @returns time elapsed from the present time.
 */
const timeAgo = (input) => {
  const date = input instanceof Date ? input : new Date(input)
  const formatter = new Intl.RelativeTimeFormat('en')
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  }
  const secondsElapsed = (date.getTime() - Date.now()) / 1000
  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key]
      return formatter.format(Math.round(delta), key)
    }
  }
}

export default timeAgo
