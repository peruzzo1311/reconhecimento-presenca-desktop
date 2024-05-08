'use client'

import { Training, useTrainingStore } from '@/store/training'
import { Calendar, ChevronRight, GraduationCap } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface props {
  training: Training
}

export default function TrainingItem({ training }: props) {
  const { setTraining } = useTrainingStore()
  const router = useRouter()

  const handleSelectTraining = () => {
    if (!Array.isArray(training.participantes)) {
      training.participantes = [training.participantes]
    }

    setTraining(training)
    router.push('/presence-list/')
  }

  return (
    <div
      onClick={handleSelectTraining}
      className='rounded-2xl overflow-hidden border border-primary cursor-pointer hover:opacity-80 active:opacity-20 transition-all duration-200 ease-in-out '
    >
      <div className='bg-primary text-center py-1'>
        <p className='text-white font-bold'>{training.nomCua}</p>
        <p className='text-white font-bold text-sm'>Turma: {training.tmaCua}</p>
      </div>

      <div className='flex items-center justify-between p-4'>
        <GraduationCap
          size={40}
          color='#0171BB'
        />

        <div className='space-y-2'>
          <div className='columns-2'>
            <div className='flex items-center'>
              <Calendar
                size={20}
                color='#0171BB'
                className='mr-2'
              />

              <span>Início:</span>
            </div>

            <span>{training.datIni}</span>
          </div>

          <div className='columns-2'>
            <div className='flex items-center'>
              <Calendar
                size={20}
                color='#0171BB'
                className='mr-2'
              />

              <span>Fim:</span>
            </div>

            <span>{training.datFim}</span>
          </div>
        </div>

        <ChevronRight
          size={30}
          color='#0171BB'
        />
      </div>
    </div>
  )
}
