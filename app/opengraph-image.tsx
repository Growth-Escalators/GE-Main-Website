import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Growth Escalators — Growth, Engineered'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', padding: '70px 76px',
          background: 'linear-gradient(145deg,#170653 0%,#2c0a84 58%,#244cff 100%)', color: '#fff',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, fontWeight: 700 }}>
          <span>GROWTH ESCALATORS</span>
          <span style={{ color: '#7bf0c4' }}>JAIPUR · INDIA</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, lineHeight: .84, fontWeight: 800, letterSpacing: '-5px' }}>GROWTH,</div>
          <div style={{ fontSize: 104, lineHeight: .84, fontWeight: 800, letterSpacing: '-5px' }}>ENGINEERED.</div>
          <div style={{ marginTop: 32, fontSize: 27, color: 'rgba(255,255,255,.78)' }}>Performance marketing × websites × AI × technology talent</div>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 18, color: 'rgba(255,255,255,.72)' }}>
          <span>187+ brands scaled</span><span>·</span><span>97% client retention</span><span>·</span><span>₹10Cr+ ad spend managed</span>
        </div>
      </div>
    ),
    size,
  )
}
