import Container from '@/components/container'
import Header from '@/components/header'
import TrainingItem from '@/components/training-item'
import { Training } from '@/store/training'

interface Response {
  msgRet: string
  treinamento: Training[]
}

export default async function TrainingList() {
  const res = await fetch(
    'https://dc.prismainformatica.com.br:8188/SXI-API/G5Rest?server=https://dc.prismainformatica.com.br:8188&module=tr&service=com_prisma_treinamentos&port=getTreinamentos',
    {
      method: 'POST',
      headers: {
        user: 'prisma.integracao',
        pass: '@98fm',
        encryptionType: '0',
        Authorization: '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numEmp: 1,
      }),
    }
  )

  const data = (await res.json()) as Response

  if (!res.ok) {
    return <p>Erro ao carregar treinamentos</p>
  }

  return (
    <div>
      <Header
        title='Lista de Treinamentos'
        showSubHeader
      />

      <Container className='mt-8 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {data.treinamento.map((training) => (
          <>
            <TrainingItem
              key={training.codCua.toString() + training.tmaCua.toString()}
              training={training}
            />
          </>
        ))}
      </Container>
    </div>
  )
}
