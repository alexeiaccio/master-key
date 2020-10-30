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
    if (typeof navigator !== undefined) {
      if (asPath === '/') {
        if (navigator.language.includes('ru')) {
          router.replace('/rus')
          if (lang !== 'rus') {
            toggleLang()
          }
        } else {
          router.replace('/eng')
          if (lang !== 'eng') {
            toggleLang()
          }
        }
      } else if (asPath === '/eng' && lang !== 'eng') {
        toggleLang()
      } else if (asPath === '/rus' && lang !== 'rus') {
        toggleLang()
      }
    }
  }, [])

  const title = lang === 'rus' ? 'Мастер Ключ' : 'Master Key'
  const description =
    lang === 'rus'
      ? 'Работа была выполнена для выставки «Я не знаю, Земля кружится или нет…», кураторы которой — Франческа Альтамура и Лизавета Матвеева, для VII Московской международной биеннале молодого искусства.'
      : 'This work was commissioned for the exhibition “I don’t know whether the Earth is spinning or not...”, curated by Francesca Altamura and Lizaveta Matveeva for the VII Moscow International Biennale for Young Art.'

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          locale: lang === 'rus' ? 'ru_Ru' : 'en_US',
          site_name: title,
          title,
          description,
        }}
      />
      <Scene items={items} />
    </>
  )
}
