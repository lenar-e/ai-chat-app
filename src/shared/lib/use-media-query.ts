import { useEffect, useState } from 'react'

/** Matches Tailwind's `md:` breakpoint (768px) */
export function useIsNarrowScreen() {
  const query = '(max-width: 767px)'
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)
    listener()
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
