import { useDialogStore } from '@/store/dialog'
import { Participant } from '@/store/training'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from '@nextui-org/react'
import { Camera } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CameraDialog() {
  const { isOpen, onClose, type, data } = useDialogStore()
  const [videoPlayer, setVideoPlayer] = useState<HTMLVideoElement | null>(null)

  useEffect(() => {
    const getDevice = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      })

      if (videoPlayer) {
        videoPlayer.srcObject = stream
      }
    }

    getDevice()
  }, [videoPlayer])

  const isModalOpen = isOpen && type === 'camera'
  const { participant } = data as { participant: Participant }

  if (!isModalOpen) {
    return null
  }

  return (
    <Modal
      backdrop='opaque'
      isOpen={isOpen}
      onOpenChange={onClose}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
      classNames={{
        backdrop:
          'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
      }}
    >
      <ModalContent>
        <ModalBody className='p-8'>
          <video
            autoPlay
            className='rounded-lg'
            ref={(ref) => setVideoPlayer(ref)}
          />
        </ModalBody>

        <ModalFooter className='flex justify-center'>
          <Button
            color='primary'
            radius='full'
            onPress={onClose}
          >
            <Camera />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
