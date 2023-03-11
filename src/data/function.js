export const onLike = (liked , increment  ) => {
  if (!increment) {
    liked++
  }
  else {
    liked--
  }
  return liked
}