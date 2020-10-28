import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as fs from 'fs'

import Scene from '../components/Scene'
import { useStore } from '../hooks/useStore'

export async function getStaticProps() {
  const items = await fs.readFileSync('public/data/items.json', 'utf-8')

  return {
    props: {
      items: JSON.parse(items),
    },
  }
}

export default function Index({ items }) {
  const router = useRouter()
  const lang = useStore((state) => state.lang)
  const toggleLang = useStore((state) => state.toggleLang)

  const asPath = router.asPath

  useEffect(() => {
    if (
      (asPath === '/rus' && lang !== 'rus') ||
      (asPath === '/eng' && lang !== 'eng')
    ) {
      toggleLang()
    }
  }, [asPath, lang])

  useEffect(() => {
    if (typeof navigator !== undefined && asPath === '/') {
      router.replace(navigator.language.includes('ru') ? '/rus' : '/eng')
    }
  }, [])

  const title = lang === 'rus' ? 'Мастер Ключ' : 'Master Key'
  const description = lang === 'rus' ? 'Мастер Ключ' : 'Master Key'

  return (
    <>
      <NextSeo title={title} description={description} />
      <Scene items={items} />
    </>
  )
}
