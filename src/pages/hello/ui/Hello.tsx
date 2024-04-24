import React, { FC } from 'react';
import logo from './logo.svg';
import s from './Hello.scss';
import useChangePageTitle from 'src/features/changePageTitle/model/useChangePageTitle';

export const Hello: FC = () => {
  useChangePageTitle('titlePage.hello');
  return (
    <>
      <header className={s.header}>
        Мазуренко Евгений, <i>г. Новосибирск</i>
      </header>
      <header className={s.subheader}>Зачем мне обучение</header>
      <div className={s.textBlock}>
        <p>
          Конкретных целей на обучение у меня нет, записался на курс так как мне была предоставлена хорошая скидка по
          окончанию предыдущего курса{' '}
          <a className={s.link} href="https://otus.ru/lessons/unity-basic">
            Unity Game Developer. Basic
          </a>
          .
        </p>
        <p>
          Выбрал данную программу обучения, так как вижу для себя перспективную ценность владения технологией
          проектирования и разработки фронтальных решений, конкретно:
        </p>
        <ul className={s.unorderedList}>
          <li>расширение компетенций для решения большего разнообразия производственных задач;</li>
          <li>
            способность единоличного создания клиент-серверного Web-приложения и её реализация через заказы &quot;на
            стороне&quot;;
          </li>
          <li>
            применение технологии к разработке простых браузерных Web-игр на замену более громоздкому для этих целей
            движку Unity.
          </li>
        </ul>
      </div>
      <header className={s.subheader}>Что я умею</header>
      <div className={s.textBlock}>
        <p>
          Почти 12 лет опыта работы программистом, в том числе последние 6 лет в промышленной разработке финансового
          сектора в роли backend-разработчика сначала на Oracle, затем на Java, дало мне обширные знания и выработало
          практические умения в серверной разработке Web-приложений.
        </p>
      </div>
      <header className={s.subheader}>Кто я такой</header>
      <div className={s.textBlock}>
        <p>
          Проживаю и работаю в городе Новосибирске, трудоустроен в должности главного инженера в дочернем
          интех-подразделении крупного банка. По долгу службы участвую в backend-разработке нескольких портальных
          проектов.
        </p>
        <p>
          В рамках данного обучения хочу вобрать в себя макисмум рассматриваемого материала и бросить вызов своим
          когнитивным способностям, поэтому не нуждаюсь в командном опыте и стремлюсь объять необъятное, завершив
          обучение в одиночку.
        </p>
      </div>
      <header className={s.footer}>
        <img src={logo} className={s.logo} alt="logo" />
      </header>
    </>
  );
};
