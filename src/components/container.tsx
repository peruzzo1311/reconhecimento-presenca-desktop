import { cn } from '@/lib/utils'

interface props {
  className?: string
  children: React.ReactNode
}

export default function Container({ className = '', children }: props) {
  return (
    <section className={cn('container mx-auto px-4 md:px-0', className)}>
      {children}
    </section>
  )
}
