import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface Participant {
  numEmp: number
  tipCol: number
  numCad: number
  nomFun: string
  numCpf: string
  fotCol: string
  isPresent?: boolean
}

export interface Training {
  codCua: number
  nomCua: string
  tmaCua: number
  datIni: string
  datFim: string
  participantes: Participant[]
}
interface stateProps {
  training: Training | null
  setTraining: (training: Training) => void
  setParticipantPresence: (cpf: string) => void
  clearTraining: () => void
}

export const useTrainingStore = create<stateProps>((set) => ({
  training: null,
  setTraining: (training) => set({ training }),
  setParticipantPresence: (cpf: string) => {
    set((state) => {
      if (!state.training) {
        return state
      }

      const newTraining = { ...state.training }
      const participant = newTraining.participantes.find(
        (p) => p.numCpf === cpf
      )

      if (participant) {
        participant.isPresent = true
      }

      return { training: newTraining }
    })
  },
  clearTraining: () => set({ training: null }),
}))
