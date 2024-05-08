import ButtonMenu from '@/components/button-menu'
import Container from '@/components/container'
import Header from '@/components/header'
import { GraduationCap, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header
        title='Início'
        showSubHeader
      />

      <Container className='mt-8'>
        <div className='flex justify-around items-center'>
          <ButtonMenu>
            <GraduationCap size={60} />

            <p className='w-full font-semibold text-wrap'>Lista de Presença</p>
          </ButtonMenu>

          <ButtonMenu>
            <Users size={60} />

            <p className='w-full font-semibold text-wrap'>Consultar Presença</p>
          </ButtonMenu>
        </div>
      </Container>
    </>
  )
}
