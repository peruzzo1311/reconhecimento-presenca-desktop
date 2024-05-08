'use client'

import { useDialogStore } from '@/store/dialog'
import { Participant } from '@/store/training'
import { Avatar } from '@nextui-org/react'

interface props {
  participant: Participant
}

export default function PresenceItem({ participant }: props) {
  const { onOpen } = useDialogStore()

  const handleClick = () => {
    onOpen('camera', { participant })
  }

  return (
    <div
      key={participant.numCpf}
      onClick={handleClick}
      className='bg-white flex items-center gap-3 py-3 cursor-pointer active:opacity-20 hover:bg-primary/20 rounded-lg px-4 transition-all duration-200 ease-in-out'
    >
      <Avatar
        showFallback
        name={participant.nomFun.charAt(0).toUpperCase()}
        src={`data:image/jpeg;base64,${participant.fotCol}`}
        className='w-12 h-12 text-xl font-bold border-2 border-primary drop-shadow-lg'
      />

      <div className='flex-1'>
        <p className='font-medium'>{participant.nomFun}</p>
      </div>

      <div className='flex items-center justify-center'>
        {participant.isPresent ? (
          <div className='border border-green-500 bg-green-300 rounded-xl px-3 py-1'>
            <p className='text-green-900 font-bold text-sm'>Presente</p>
          </div>
        ) : (
          <div className='border border-red-500 bg-red-200 rounded-xl px-3 py-1'>
            <p className='text-red-900 font-bold text-sm'>Não confirmado</p>
          </div>
        )}
      </div>
    </div>
  )
}
