import { useState } from 'react'
import { useStore } from '../hooks/useStore'

export default function Info() {
  const lang = useStore((state) => state.lang)
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center mx-4 overflow-visible font-mono text-sm text-black">
      <div
        className="text-right cursor-pointer"
        onClick={() => setOpened((state) => !state)}
      >
        {opened ? 'close' : 'info'}
      </div>
      {opened ? (
        <div
          className="absolute top-0 right-0 z-50 w-screen p-4 my-6 space-y-2 overflow-y-auto bg-white border-2 border-gray-700 border-solid"
          style={{
            minWidth: '20rem',
            maxWidth: '40rem',
            zIndex: 9999999999999,
            maxHeight: '80vh',
          }}
        >
          {lang === 'eng' ? (
            <>
              <div>Sasha Zubritskaya, Master Key. 2019-2020</div>
              <div>
                Commissioned for the exhibition “I don’t know whether the Earth
                is spinning or not...”, curated by Francesca Altamura and
                Lizaveta Matveeva for the{' '}
                <a
                  className="text-blue-700"
                  href="http://youngart.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VII Moscow International Biennale for Young Art
                </a>
                .
              </div>
              <div>
                This digital work is based on a physical solo show “Master Key”,
                which took place in Navicula Artis gallery, St. Petersburg, in
                spring of 2019 and was curated by Anastasia Kotyleva.
              </div>
              <div>
                The entirety of the initial show belongs to a private
                collection. Although the status of these heavily digitally
                processed, editioned, 3d scanned, digitally recreated, or
                found-again objects remains uncertain and is probably courtesy
                of the artist.
              </div>
              <div>
                Translations: Joan Brooks (rus-eng) and Nikita Safonov (eng-rus)
              </div>
              <div>
                Website:{' '}
                <a
                  className="text-blue-700"
                  href="https://beta.accio.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  accio
                </a>
              </div>
            </>
          ) : (
            <>
              <div>Саша Зубрицкая, Мастер Ключ. 2019-2020</div>
              <div>
                Работа была выполнена для выставки «Я не знаю, Земля кружится
                или нет…», кураторы: Франческа Альтамура и Лизавета Матвеева,
                <a
                  className="text-blue-700"
                  href="http://youngart.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VII Московская международная биеннале молодого искусства
                </a>
                .
              </div>
              <div>
                Эта цифровая работа основана на физической персональной выставке
                “Мастер Ключ”, прошедшей в галерее Навикула Артис
                (Санкт-Петербург) в апреле-мае 2019 года, куратор - Анастасия
                Котылева.
              </div>
              <div>
                Все физически существующие объекты и видео выставки “Мастер
                Ключ” находятся в частной коллекции. Тем не менее, статус
                представленных здесь (подвергнутых цифровой обработке,
                отсканированных, воссозданных в цифровой среде,
                найденных-заново, тиражных) объектов неясен, и, скорее всего,
                является собственностью художницы.
              </div>
              <div>
                Переводы: Joan Brooks (рус-англ) и Никита Сафонов (англ-рус)
              </div>
              <div>
                Сайт:{' '}
                <a
                  className="text-blue-700"
                  href="https://beta.accio.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  accio
                </a>
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  )
}
