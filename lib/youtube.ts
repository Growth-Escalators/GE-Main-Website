/**
 * Extract a YouTube video ID from any URL format.
 * Handles: /shorts/<id>, /watch?v=<id>, /embed/<id>, youtu.be/<id>.
 * Returns null for unparseable inputs.
 */
export function getYouTubeId(url: string): string | null {
  if (!url) return null
  const patterns: RegExp[] = [
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}

/** Public YouTube thumbnail URL (no API key needed, no quota). */
export function youTubeThumbnail(id: string, quality: 'hq' | 'max' = 'hq'): string {
  // hqdefault always exists; maxresdefault may 404 for some videos.
  return `https://i.ytimg.com/vi/${id}/${quality === 'max' ? 'maxresdefault' : 'hqdefault'}.jpg`
}

/** Privacy-safe embed URL (cookies only set after play). */
export function youTubeEmbedUrl(id: string, opts: { autoplay?: boolean } = {}): string {
  const params = new URLSearchParams({
    autoplay: opts.autoplay ? '1' : '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
  })
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`
}
