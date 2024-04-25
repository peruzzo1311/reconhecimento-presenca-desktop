import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
    >
      <body
        className={cn(
          inter.className,
          'antialiased bg-neutral-100 text-neutral-950'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
