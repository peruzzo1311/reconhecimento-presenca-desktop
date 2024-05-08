import { Button } from '@nextui-org/react'
import Link from 'next/link'

interface props {
  children: React.ReactNode
}

export default function ButtonMenu({ children }: props) {
  return (
    <Link href={'/training-list/'}>
      <Button
        variant='shadow'
        color='primary'
        className='w-36 h-36 flex-col border-2 border-white'
        isIconOnly
      >
        {children}
      </Button>
    </Link>
  )
}
