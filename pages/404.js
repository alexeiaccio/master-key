import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Page404() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [])

  return (
    <div>
      <h1>Ooops...</h1>
    </div>
  )
}
