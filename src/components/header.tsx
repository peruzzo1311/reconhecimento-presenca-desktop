'use client'

import logo from '@/assets/logo.png'
import { Button } from '@nextui-org/react'
import { ArrowLeft, Filter } from 'lucide-react'
import Container from './container'
import { useRouter } from 'next/navigation'

interface props {
  title?: string
  showSubHeader?: boolean
}

export default function Header({ title = '', showSubHeader = false }: props) {
  const router = useRouter()

  return (
    <>
      <header className='h-12 bg-primary flex items-center'>
        <Container>
          <picture>
            <img
              src={logo.src}
              alt='logo'
              className='object-contain w-auto h-8'
            />
          </picture>
        </Container>
      </header>

      {showSubHeader && (
        <Container className='flex justify-between items-center my-2'>
          <Button
            onClick={() => router.back()}
            isIconOnly
            variant='light'
            color='primary'
          >
            <ArrowLeft />
          </Button>

          <h1 className='text-xl font-semibold self-center'>{title}</h1>

          <div>
            <Button
              isIconOnly
              variant='light'
              color='primary'
            >
              <Filter />
            </Button>
          </div>
        </Container>
      )}
    </>
  )
}
