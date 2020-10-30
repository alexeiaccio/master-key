import { useState } from 'react'
import { useStore } from '../hooks/useStore'

export default function Info() {
  const lang = useStore((state) => state.lang)
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center mx-4 overflow-visible font-mono text-sm text-gray-700">
      <div
        className="font-sans text-right cursor-pointer"
        onClick={() => setOpened((state) => !state)}
      >
        {opened
          ? lang === 'eng'
            ? 'close'
            : 'закрыть'
          : lang === 'eng'
          ? 'info'
          : 'инфо'}
      </div>
      {opened ? (
        <div className="absolute bottom-0 right-0 z-50 p-4 m-6 bg-white border-2 border-gray-700 border-solid">
          {lang === 'eng' ? (
            <div>
              This work was commissioned for the exhibition “I don’t know
              whether the Earth is spinning or not...”, curated by Francesca
              Altamura and Lizaveta Matveeva for the VII Moscow International
              Biennale for Young Art.
            </div>
          ) : (
            <div>
              Работа была выполнена для выставки «Я не знаю, Земля кружится или
              нет…», кураторы которой — Франческа Альтамура и Лизавета Матвеева,
              для VII Московской международной биеннале молодого искусства.
            </div>
          )}
          <div>
            <h4>Credits</h4>
            {lang === 'eng' ? (
              <ul>
                <li>Artist: Sasha Zubritskaya</li>
                <li>Curators: Francesca Altamura and Lizaveta Matveeva</li>
                <li>
                  Site development:{' '}
                  <a
                    href="https://beta.accio.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    accio
                  </a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>Автор: Саша Зубрицкая</li>
                <li>Кураторы: Франческа Альтамура и Лизавета Матвеева</li>
                <li>
                  Сайт:{' '}
                  <a
                    href="https://beta.accio.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    accio
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
