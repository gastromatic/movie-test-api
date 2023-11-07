export function serverTime(): { secondsSince1970: number } {
  return { secondsSince1970: Math.floor(Date.now() / 1000) };
}
