'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

interface props {
  children: React.ReactNode
}

export default function Providers({ children }: props) {
  return (
    <NextUIProvider>
      <Toaster />

      {children}
    </NextUIProvider>
  )
}
