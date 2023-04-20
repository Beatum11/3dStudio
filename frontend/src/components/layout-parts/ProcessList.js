import React from 'react';
import '../../cssFiles/process.css';
import ProcessItem from '../elements/ProcessItem';

const ProcessList = () => {

  return (
    <ul className='process-list'>
        <ProcessItem title={'Брифинг'}
        text={'В ходе созовна обрабатываем уже имеющиеся идеи, придумываем новые, определяем сроки.'}/>

        <ProcessItem title={'Сбор референсов'}
        text={'Находим и утверждаем пакет референсов для проекта'}/>

        <ProcessItem title={'Превиз'}
        text={'Общая анмимация без деталей и хорошего качества для оценки общей идеи. Лучшее время для внесения правок.'}/>

        <ProcessItem title={'Статика'}
        text={'Рендер нескольких основных кадров в хорошем качестве для общего визуального стиля.'}/>

        <ProcessItem title={'Основная работа'}
        text={'Анимация моделей, визуальные эффекты, настройка света и рендер.'}/>

        <ProcessItem title={'Композитинг монтаж'}
        text={'Финальный файл в нужном формате передается вам'}/>
    </ul>
  )
}

export default ProcessList;