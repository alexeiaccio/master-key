import { Html } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'

import { useStore } from '../hooks/useStore'

export default function TextItem({ item, scale, index, ...props }) {
  const lang = useStore((state) => state.lang)
  const setScales = useStore((state) => state.setScales)

  useMemo(() => {
    setScales(index, [17, 8])
  }, [])

  return (
    <group {...props} dispose={null}>
      <Html scaleFactor={0.02} center>
        <div style={{ width: '42rem' }} className="text-sm cursor-default">
          {lang === 'eng' ? (
            <div>
              <div className="mb-8">
                One Small Favour is a humorous quest in which you are asked to
                complete a favour, although things turn out to be less simple
                than that.
              </div>
              <div className="mb-8">
                If you're new to Shilo Village after solving the mystery (or
                even if you did it some time ago), you may like to check out
                Yanni Salika's antiques shop.
              </div>
              <div className="mb-8">
                He's a busy chap, revamping antique items, checking out new
                stock from potential adventurers and maybe he'll have a small(1)
                favour to ask of you? Probably nothing particularly large, Yanni
                isn't a demanding(2) person, should hardly take you any time(3) at
                all really, something to do when you have a spare moment.
              </div>
              <div className="mb-8">
                That's assuming there aren't any complications.
              </div>
              <div>
                1: - Perception of the word "small" may be open to
                interpretation.
              </div>
              <div>
                2: - In a recent vote, Yanni Salika was only voted the second
                most demanding person in Shilo Village.
              </div>
              <div></div>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                Одна маленькая любезность — это юмористический квест, в котором
                вас просят оказать любезность, которая оказывается не такой
                простой, как казалась сначала.
              </div>
              <div className="mb-8">
                Если вы первый раз в деревне Шило — после того, как раскрыли
                тайну (или спустя какое-то время после этого), то вам стоит
                заглянуть в антикварную лавку Янни Салики.
              </div>
              <div className="mb-8">
                Это очень деловой дядя — он латает антикварные предметы и
                находит новые у тех, кто любит искать приключения. Может, он
                попросит тебя оказать ему маленькую(1) любезность? Скорее всего,
                что-то совсем несерьезное, Янни не взыскательный(2) человек,
                вряд ли оно займет у тебя много времени(3), в общем, скорее
                всего это что-то, что можно сделать на досуге.
              </div>
              <div className="mb-8">
                Так что ничего сложного точно не будет.
              </div>
              <div>
                1 — Восприятие слова «маленькая» открыто к интерпретациям.
              </div>
              <div>
                2 — На недавнем голосовании Янни Салика был признан вторым по
                взыскательности жителем деревни Шило.
              </div>
              <div>3 — Как известно, время относительно.</div>
            </div>
          )}
          <div className="mt-8 text-xs">
            https://runescape.fandom.com/wiki/One_Small_Favour
          </div>
        </div>
      </Html>
    </group>
  )
}
