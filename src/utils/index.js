const units = {
  year  : 24 * 60 * 60 * 1000 * 365,
  month : 24 * 60 * 60 * 1000 * 365/12,
  day   : 24 * 60 * 60 * 1000,
  hour  : 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
}

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const getRelativeTime = (d1, d2 = new Date()) => {
  const elapsed = d1 - d2

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (let u in units) {
    if (Math.abs(elapsed) > units[u] || u === "second") {
      return rtf.format(Math.round(elapsed/units[u]), u)
    }
  }
}

export const getTime = (datestring) => {
  const timestamp = (Date.parse(datestring) - Date.now()) / 1000;

  const hours = Math.floor(timestamp / (60 * 60));
  const minutes = Math.floor((timestamp / 60) % 60);
  const seconds = Math.floor((timestamp / 1) % 60);

  return (
    String(hours).padStart(2, 0) +
    ":" +
    String(minutes).padStart(2, 0) +
    ":" +
    String(seconds).padStart(2, 0)
  );
};
