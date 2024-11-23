export const moveScrollTo = (
  ref: HTMLElement | null,
  block: ScrollLogicalPosition,
  behavior: ScrollBehavior = 'smooth',
) => {
  if (!ref) return
  ref.scrollIntoView({
    block,
    behavior,
  })
}
