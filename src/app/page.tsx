/* eslint-disable @next/next/no-img-element */
'use client'

import { Button, Checkbox, Input } from '@nextui-org/react'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

import logo from '@/assets/icon.png'
import { useUserStore } from '@/store/user'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { user, setUser } = useUserStore()
  const router = useRouter()

  if (user) {
    router.push('/home')

    return
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setIsLoading(true)

      if (!username || !password) {
        toast.error('Preencha todos os campos')
      }

      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })

      const user = await res.json()

      if (user) {
        setUser(user)
        router.push('/home')

        return
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='w-full h-screen flex justify-center items-center'>
      <form
        className='space-y-4 w-full max-w-xs'
        onSubmit={handleSubmit}
      >
        <div className='flex justify-center items-center mb-8'>
          <img
            src={logo.src}
            alt='Prisma Gestão de Softwares'
            width={100}
            height={100}
          />
        </div>

        <Input
          classNames={{
            inputWrapper: 'border border-gray-300 rounded-lg shadow',
          }}
          type='text'
          label='Usuario'
          variant={'bordered'}
          size='sm'
          disabled={isLoading}
          value={username}
          onValueChange={setUsername}
        />

        <Input
          classNames={{
            inputWrapper: 'border border-gray-300 rounded-lg shadow',
          }}
          type={showPassword ? 'text' : 'password'}
          label='Senha'
          variant={'bordered'}
          size='sm'
          disabled={isLoading}
          value={password}
          onValueChange={setPassword}
        />

        <Checkbox
          isSelected={showPassword}
          onValueChange={setShowPassword}
          disabled={isLoading}
          className='!my-4'
        >
          <p className='text-sm'>Mostrar senha</p>
        </Checkbox>

        <Button
          color='primary'
          className='w-full rounded-lg'
          type='submit'
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </form>
    </section>
  )
}
