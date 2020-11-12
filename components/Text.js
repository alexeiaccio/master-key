import { useStore } from '../hooks/useStore'

export default function Text() {
  const lang = useStore((state) => state.lang)

  return (
    <div className="text">
      <style jsx>
        {`
          .text {
            color: #000;
            border-radius: 4px;
            font-size: 0.85rem;
            margin: 0 0.9rem;
            overflow: scroll;
            width: 50vw;
            height: 80vh;
            min-width: 32rem;
            max-width: 44rem;
            min-height: 40rem;
            max-height: 52rem;
            position: relative;
            padding: 0 1rem;
            cursor: default;
          }
          .section {
            padding: 1rem 0;
          }
          .section > p {
            margin-bottom: 0.5rem;
          }
        `}
      </style>
      {lang === 'eng' ? (
        <div className="section">
          <div>
            1. Spring: compression, waiting, tension before the jump
            <br />
            2. What is&nbsp;the goal? whatever it&nbsp;is
            <br />
            3. Straighten up&nbsp;— rush around, grow through, being-the-source,
            spring = source (that&nbsp;is, the key*), source of&nbsp;keys
            (master key), the spring will flow past like spring-key water
            <br />
            4. Master key&nbsp;— key to&nbsp;many locks (to&nbsp;<em>
              which
            </em>{' '}
            many is&nbsp;kept quiet), change key&nbsp;— to&nbsp;some specific
            one, the key to&nbsp;change, the cashier gives you a&nbsp;key
            as&nbsp;change
            <br />
            5. Key plot twist
            <br />
            master key&nbsp;— umbrella of&nbsp;keys, master plot&nbsp;— umbrella
            of&nbsp;plots: quest, riddle, love, forbidden love, enmity,
            dangerous excesses, heroism (everyday?), etc. etc. —&nbsp;
            <em>
              to&nbsp;saddle a&nbsp;narrative at&nbsp;least, if&nbsp;there
              is&nbsp;nothing else to&nbsp;saddle
            </em>
            <br />
            6. Cold-hot, hot is&nbsp;better, but we&nbsp;want balance,
            so&nbsp;we&nbsp;don’t get burned
            <br />
            7. Fire, work with me&nbsp;— establish working relations with fire,
            sign a&nbsp;contract (in&nbsp;strawberry juice)
            <br />
            8. Fires and strawberries&nbsp;— both are hot
            <br />
            9. The aggregate conditions of&nbsp;desire: we&nbsp;drip juice,
            evaporate by&nbsp;the fire
            <br />
            10. Swings: fort/da&nbsp;— territorial casino of&nbsp;possession and
            deprivation: good/bad, hot/cold, strong/weak; the subtleties
            of&nbsp;searches and elopements.
            <br />
            11. A&nbsp;fire truck&nbsp;— in&nbsp;case of&nbsp;uncontrolled
            combustion
            <br />
            12. Is&nbsp;Swinging on&nbsp;a&nbsp;Swing Good Exercise?
            <br />
            13. Swings: outside or&nbsp;inside? where will they swing? the
            search for balance&nbsp;— the source (spring) of&nbsp;myth-creation
            (they say a&nbsp;“regime” or&nbsp;reign over the self will
            help&nbsp;us all)
            <br />
            14. Attempts to&nbsp;balance external and internal swings involve
            virtuoso mechanics (rolla bolla) and amateur pharmacopolitics
            (circles of&nbsp;pharmacopolitical mutual aid, sommelier
            of&nbsp;pills: we&nbsp;need to&nbsp;be&nbsp;stamped, that&nbsp;is,
            we&nbsp;are quicklime or&nbsp;a&nbsp;ticket)
            <br />
            15. Where are&nbsp;we?
            <br />
            16. Nets: they bring in&nbsp;either rubbish
            or&nbsp;strawberries&nbsp;— both help and hindrance respectively
            (a&nbsp;can of&nbsp;sardines is&nbsp;not more nutritious than fresh
            fish but it&nbsp;is&nbsp;better for you and more useful)
            <br />
            17. The basketball hoop is&nbsp;the least useful net:
            it&nbsp;catches nothing even if&nbsp;you hit the mark,
            a&nbsp;butterfly net is&nbsp;better
          </div>
          <div>
            18.{' '}
            <div className="pb-4 pl-10">
              <img
                src="/Fishing_with_Net.gif"
                width="204"
                height="320"
                alt="Master Key"
              />
            </div>
          </div>
          <div>
            19. A&nbsp;net is&nbsp;a&nbsp;web, but also a&nbsp;screen,
            a&nbsp;curtain, a&nbsp;border, a&nbsp;confusing shadow
            on&nbsp;a&nbsp;fence
          </div>
          <div>
            20. Shadowban: I&nbsp;see everything, but&nbsp;I can’t speak
          </div>
          <div>21. The border key -|||--- ~ —O</div>
          <div>
            22. Safety nets (suicide nets), in&nbsp;their absence we&nbsp;hold
            hands (we&nbsp;are our own safety net)
          </div>
          <div>23. Where are&nbsp;we?</div>
          <div>24. A&nbsp;keyhole in&nbsp;a&nbsp;bow</div>
          <div>
            25.
            <div className="pb-4 pl-4">
              <img src="/666.png" width="67" height="85" alt="Master Key" />
            </div>
          </div>
          <div>
            26. To&nbsp;catch and be&nbsp;caught
            <br />
            27. Knot: link, leash, connection&nbsp;— 1, 1½, 2, memory
            of&nbsp;swaddling
            <br />
            28. Hot keys, hot keyboards
            <br />
            29. Where are we&nbsp;— hot-cold, warmer, very hot (the search for
            fire), dowsing (the search for the source)
            <br />
            it’s all territorial games
            <br />
            30. Metastable conditions**: strawberries on&nbsp;a&nbsp;hillock
            <br />
            31. I&nbsp;want&nbsp;I don’t know what
            <br />
            32. MacGuffin&nbsp;— an&nbsp;object around which the plot
            of&nbsp;a&nbsp;work (typically a&nbsp;thriller) takes shape though
            the search for it&nbsp;or&nbsp;desire to&nbsp;possess&nbsp;it, while
            the nature of&nbsp;the object itself plays no&nbsp;essential role
            and is&nbsp;often not made explicit.{' '}
            <em>
              It&nbsp;doesn’t matter what the thing&nbsp;is; what matters
              is&nbsp;everyone wants to&nbsp;possess&nbsp;it.
            </em>
            <br />
            33. ‘Easy Come, Easy Go’, Jan Steen, 1661. Allegorical warning
            against gambling.{' '}
            <em>
              Another title: ‘The Artist Eating Oysters’. In&nbsp;Russian the
              title is&nbsp;even more laconic: ‘Such Is&nbsp;the Course
              of&nbsp;Life’
            </em>
            <br />
            34. Dead giveaway
            <br />
            35. Campfire-spider: having grown feet, it&nbsp;runs from place
            to&nbsp;place, the divining rod spins, the compasses are confused
            <br />
            36. The D&nbsp;scale indicator is&nbsp;at&nbsp;70 (level
            of&nbsp;disadaptation).
            <br />
            37. Where are&nbsp;we?
          </div>
          <div>
            38.{' '}
            <div className="pb-4 pl-8">
              <img src="/999.png" width="300" height="277" alt="Master Key" />
            </div>
          </div>
          <div>
            39.{' '}
            <em>
              “We&nbsp;just need to&nbsp;go&nbsp;a&nbsp;little further,” said
              Camier, "until we&nbsp;can sense that we’ve reached the point
              where we&nbsp;have exactly enough strength to&nbsp;go&nbsp;back.
              Then we&nbsp;will turn and come here, to&nbsp;the ruins,
              completely exhausted.
              <br />
              “That’s dangerous,” said Mercier.
              <br />
              “Do&nbsp;you have a&nbsp;better idea?” said Camier.
              <br />
              “Maybe we&nbsp;can just dance a&nbsp;bit here,” said Mercier,
              “in&nbsp;other words, perform some abrupt body motions. That won’t
              be&nbsp;risky at&nbsp;all. And when we’ve had enough, we&nbsp;can
              collapse from exhaustion among the ruins.”
              <br />
              “I&nbsp;can still drag myself along the road a&nbsp;bit more,”
              said Camier, “but&nbsp;I can’t do&nbsp;any jumping.”
              <br />
              “Then let’s just walk back and forth,” said Mercier.
            </em>
            ***
          </div>
          <div>
            <strong>
              <br />
              <br />
            </strong>
          </div>
          <div>Sasha Zubritskaya</div>
          <div>
            MASTER KEY
            <br />
            2019
            <br />
            Translated by&nbsp;Joan Brooks
          </div>
          <div>
            <strong>
              <br />
            </strong>
          </div>
          <div>
            *In&nbsp;Russian, “kluch” means both “key” and&nbsp;“spring/geyser.”
            <br />
            **A&nbsp;statics term introduced to&nbsp;me&nbsp;by&nbsp;fellow
            artist Natalia Tikhonova.
            <br />
            ***Since the suggestion to&nbsp;walk “back and forth” isn’t
            mentioned in&nbsp;either Beckett’s English version of&nbsp;Mercier
            and Camier or&nbsp;in&nbsp;the original French, we&nbsp;have
            translated this passage from Elena Baevskaya’s translation
            of&nbsp;the novel into Russian. (Беккет С. Мерсье
            и&nbsp;Камье&nbsp;/ Пер.&nbsp;с&nbsp;фр. Баевская&nbsp;Е.&nbsp;М.:
            Текст, 2013. Стр.&nbsp;129).
          </div>
        </div>
      ) : (
        <div className="section">
          <div>1. Пружина: сжатие, засада, напряжение перед прыжком</div>
          <div>2. Цель&nbsp;— какая? какая есть</div>
          <div>
            3. Расправиться&nbsp;— броситься, прорасти, бытие-источником,
            пружина = spring = родник (он&nbsp;же ключ), ключ ключей
            (мастер-ключ), пружина протечет ключ-евой водой
          </div>
          <div>
            4. Master key&nbsp;— ключ ко&nbsp;многим замкам (к&nbsp;каким
            многим&nbsp;— умалчивается), change key&nbsp;— к&nbsp;какому-то
            одному, ключ перемен, ключ на&nbsp;сдачу
          </div>
          <div>5. Ключевой поворот сюжета</div>
          <div>
            мастер ключ&nbsp;— зонтик ключей, мастер сюжет&nbsp;— зонтик
            сюжетов: квест, загадка, любовь, запретная любовь, вражда, опасные
            излишества, героизм (бытовой?) и&nbsp;т.д.&nbsp;и&nbsp;т.п. —&nbsp;
            <em>оседлать хотя&nbsp;бы нарратив, если больше нечего</em>
          </div>
          <div>
            6. Холодно-горячо, горячо&nbsp;— лучше, но&nbsp;мы&nbsp;ищем баланс,
            чтобы не&nbsp;обжечься
          </div>
          <div>
            7. Fire, work with&nbsp;me (огонь, работай со&nbsp;мной)&nbsp;—
            установить деловые отношения с&nbsp;огнем, подписать договор
            (клубничным соком)
          </div>
          <div>8. Огни и&nbsp;клубнички: то&nbsp;и&nbsp;другое&nbsp;— hot</div>
          <div>
            9. Агрегатные состояния желания: мы&nbsp;сочимся, у&nbsp;огня&nbsp;—
            испаряемся
          </div>
          <div>
            10. Качели: fort/da&nbsp;— территориальное казино обладания
            и&nbsp;лишений:
          </div>
          <div>
            хорошо/плохо, горячо/холодно, сильно/слабо; тонкости поисков
            и&nbsp;побегов.
          </div>
          <div>
            11. Пожарная машина&nbsp;— на&nbsp;случай неконтролируемого
            возгорания
          </div>
          <div>12. Is&nbsp;Swinging on&nbsp;a&nbsp;Swing Good Exercise?</div>
          <div>
            13. Качели: снаружи или внутри? куда качнет? поиск баланса&nbsp;—
            источник (родник) мифотворчества (нам всем поможет «режим» или reign
            над самим собой)
          </div>
          <div>
            14. Попытки уравновешивания качелей наружных и&nbsp;внутренних
            вовлекают виртуозные механики (эквилибр на&nbsp;катушках)
            и&nbsp;любительские фармакополитики (кружки фармакологической
            взаимопомощи, таблеточные сомелье: нас нужно гасить, то&nbsp;есть
            мы&nbsp;известь или билет)
          </div>
          <div>15. Где мы?</div>
          <div>
            16. Сети: приносят то&nbsp;мусор, то&nbsp;клубнику&nbsp;—
            и&nbsp;помощь, и&nbsp;помеха соответственно
          </div>
          <div>
            (консервная банка не&nbsp;питательней, но&nbsp;полезней рыбы)
          </div>
          <div>
            17. Баскетбольное кольцо&nbsp;— самая бесполезная сеть: ничего
            не&nbsp;ловит даже если угодить в&nbsp;цель, лучше&nbsp;— сачок
          </div>
          <div>
            18.{' '}
            <div className="pb-4 pl-10">
              <img
                src="/Fishing_with_Net.gif"
                width="204"
                height="320"
                alt="Master Key"
              />
            </div>
          </div>
          <div>
            19. Сеть&nbsp;— паутина, но&nbsp;ещё и&nbsp;пелена, завеса, граница,
            тень на&nbsp;плетень&nbsp;— shadow
          </div>
          <div>20. Shadowban: все вижу, а&nbsp;сказать не&nbsp;могу</div>
          <div>21. Границы ключ -|||--- ~ —O</div>
          <div>
            22. Сети защитно-улавливающие: safety nets (suicide nets),
            в&nbsp;отсутствии таковых держимся за&nbsp;руки (сами-себе ЗУС)
          </div>
          <div>23. Где мы?</div>
          <div>24. Замочная скважина&nbsp;— в&nbsp;бантике</div>
          <div>
            25.{' '}
            <div className="pb-4 pl-4">
              <img src="/666.png" width="67" height="85" alt="Master Key" />
            </div>
          </div>
          <div>26. Поймать, и&nbsp;быть пойманным</div>
          <div>
            27. Узелок: связь, привязь, соединение&nbsp;— один/полтора/два,
            память о&nbsp;пеленании
          </div>
          <div>28. Hot keys: горячие ключи, горячие клавиши</div>
          <div>
            29. Где мы&nbsp;— холодно-горячо, теплее, совсем горячо (поиск
            огня), лозоискательство (поиск источника)
          </div>
          <div>всё&nbsp;— территориальные игры</div>
          <div>30. Метастабильные состояния*: клубничка на&nbsp;пригорке</div>
          <div>31. Хочу&nbsp;то, не&nbsp;знаю что</div>
          <div>
            32. Макгаффин&nbsp;— предмет, вокруг поисков или желания завладеть
            которым строится фабульная сторона произведения (как правило,
            приключенческого жанра), при этом суть самого предмета
            не&nbsp;играет существенной роли и&nbsp;зачастую
            не&nbsp;проясняется.{' '}
            <em>
              Не&nbsp;важно, что это за&nbsp;вещь; главное, что все хотят
              ею&nbsp;обладать
            </em>
            .
          </div>
          <div>
            33. «Easy Come, Easy&nbsp;Go (Легко пришло, легко ушло)»,
            Ян&nbsp;Стен, 1661.{' '}
            <em>
              Аллегория, предостерегающая от&nbsp;игры на&nbsp;ставки. Другая
              атрибуция: The artist eating oysters (Художник, поедающий
              устрицы). По-русски атрибутируется еще лаконичнее: «Таково течение
              жизни»
            </em>
          </div>
          <div>34. Dead giveaway</div>
          <div>
            35. Костер-паук: отрастивши ножки перебегает с&nbsp;места
            на&nbsp;место, лоза крутится, компасы
          </div>
          <div>сбиты</div>
          <div>
            36. Показатель по&nbsp;шкале&nbsp;D равен&nbsp;70 (уровень
            дезадаптации).
          </div>
          <div>37. Где мы?</div>
          <div>
            38.{' '}
            <div className="pb-4 pl-8">
              <img src="/999.png" width="300" height="277" alt="Master Key" />
            </div>
          </div>
          <div>
            39.{' '}
            <em>
              —&nbsp;Просто нам нужно пройти еще немного,&nbsp;— сказал
              Камье,&nbsp;— пока не&nbsp;почувствуем, что
              <br />
              дошли до&nbsp;того места, откуда нам хватит сил ровно на&nbsp;то,
              чтобы вернуться обратно. Тогда мы&nbsp;повернем и&nbsp;придем
              сюда, к&nbsp;развалинам, в&nbsp;полном изнеможении.
              <br />
              —&nbsp;Это опасно,&nbsp;— сказал Мерсье.
              <br />
              —&nbsp;Ты&nbsp;предложишь что-нибудь получше? —&nbsp;сказал Камье.
              <br />
              —&nbsp;Может, просто поплясать здесь немного,&nbsp;— сказал
              Мерсье,&nbsp;— словом, поделать всякие резкие телодвижения. Это
              нам ничем не&nbsp;грозит. А&nbsp;когда с&nbsp;нас будет
              достаточно, рухнем без сил среди руин.
              <br />
              —&nbsp;Я&nbsp;еще могу некоторое время тащиться
              по&nbsp;дороге,&nbsp;— сказал Камье,&nbsp;—
              но&nbsp;ни&nbsp;на&nbsp;какие прыжки я&nbsp;не&nbsp;способен.
              <br />
              —&nbsp;Тогда просто будем ходить взад и&nbsp;вперед,&nbsp;— сказал
              Мерсье.
            </em>
            ***
          </div>
          <div>
            <strong>
              <br />
              <br />
            </strong>
          </div>
          <div>Саша Зубрицкая</div>
          <div>МАСТЕР КЛЮЧ</div>
          <div>2019</div>
          <div>
            <strong>
              <br />
            </strong>
          </div>
          <div>
            *Термин из&nbsp;области статической физики, ранее использовавшийся
            художницей Натальей Тихоновой
          </div>
          <div>
            **Беккет С. Мерсье и&nbsp;Камье&nbsp;/ Пер.&nbsp;с&nbsp;фр.
            Баевская&nbsp;Е.&nbsp;М.: Текст, 2013. Стр.&nbsp;129
          </div>
        </div>
      )}
    </div>
  )
}
