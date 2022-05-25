export const isResponseSuccess = (res) => {
  if (res.status >= 200 && res.status < 300) return true
  return false
}