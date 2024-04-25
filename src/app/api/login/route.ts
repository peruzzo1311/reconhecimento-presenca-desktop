import { stat } from 'fs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const loginRequest = await fetch(
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/authentication/actions/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: `${username.trim()}@prisma-demo.com.br.seniorx`,
          password,
        }),
      }
    )

    const loginResponse = await loginRequest.json()

    if (!loginRequest.ok) {
      return NextResponse.json(
        { error: loginResponse.message || 'Ocorreu um erro ao fazer login' },
        { status: loginRequest.status }
      )
    }

    const token = JSON.parse(loginResponse.jsonToken).access_token as string

    const getuserRequest = await fetch(
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/user/queries/getUser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          includePhoto: true,
        }),
      }
    )

    const getUserResponse = await getuserRequest.json()

    if (!getuserRequest.ok) {
      return NextResponse.json(
        {
          error: getUserResponse.message || 'Ocorreu um erro ao buscar usuário',
        },
        { status: getuserRequest.status }
      )
    }

    return NextResponse.json(getUserResponse, {
      status: 200,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Ocorreu um erro ao fazer login' },
      { status: 500 }
    )
  }
}
