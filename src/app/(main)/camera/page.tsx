'use client'

import { useEffect, useState } from 'react'

export default function CameraScreen() {
  const [videoPlayer, setVideoPlayer] = useState<HTMLVideoElement | null>(null)

  useEffect(() => {
    const getDevice = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      })

      if (videoPlayer) {
        videoPlayer.srcObject = stream
        videoPlayer.play()
      }
    }

    getDevice()
  }, [videoPlayer])

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <video ref={(ref) => setVideoPlayer(ref)} />
    </div>
  )
}
