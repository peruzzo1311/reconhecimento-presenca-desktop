'use client'

import CameraDialog from '@/components/camera-dialog'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

interface props {
  children: React.ReactNode
}

export default function Providers({ children }: props) {
  return (
    <NextUIProvider>
      <Toaster />

      <CameraDialog />

      {children}
    </NextUIProvider>
  )
}
