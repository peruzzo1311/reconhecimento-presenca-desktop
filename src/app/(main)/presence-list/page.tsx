'use client'

import Container from '@/components/container'
import Header from '@/components/header'
import PresenceItem from '@/components/presence-item'
import { useTrainingStore } from '@/store/training'
import { Divider } from '@nextui-org/react'

export const dynamicParams = true

export default function ParticipantsList() {
  const { training } = useTrainingStore()

  if (!training) {
    return <div>Não foi possível carregar a lista de participantes.</div>
  }

  const participants = Array.isArray(training.participantes)
    ? training.participantes
    : [training.participantes]

  return (
    <div>
      <Header
        title='Lista de Participantes'
        showSubHeader
      />

      <Container>
        {participants.map((participant) => (
          <>
            <PresenceItem participant={participant} />

            {participants.indexOf(participant) !== participants.length - 1 && (
              <Divider className='my-2' />
            )}
          </>
        ))}
      </Container>
    </div>
  )
}
