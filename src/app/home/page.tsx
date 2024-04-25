'use client'

import { useUserStore } from '@/store/user'

export default function HomePage() {
  const { user } = useUserStore()

  return (
    <div>
      <p>{user?.fullName}</p>
    </div>
  )
}
