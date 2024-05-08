'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <p className='text-xl font-bold leading-6'>Página não encontrada!</p>
      <p className='text-sm'>A página que você tentou acessar não existe.</p>

      <Button
        color='primary'
        className='mt-8 rounded-lg'
        onClick={() => router.push('/training-list/')}
      >
        Voltar para a página inicial
      </Button>
    </div>
  )
}
