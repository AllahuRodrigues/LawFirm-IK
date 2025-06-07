import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#022B4A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#CFA94F',
          fontWeight: 'bold',
          borderRadius: '6px',
          fontFamily: 'system-ui',
        }}
      >
        IK
      </div>
    ),
    {
      ...size,
    }
  )
} 