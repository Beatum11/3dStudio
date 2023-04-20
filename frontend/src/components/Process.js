import React from 'react';
import '../cssFiles/process.css';
import UpperText from './layout-parts/UpperText';
import ProcessList from './layout-parts/ProcessList';

const Process = () => {

  return (
    <div className='process-wrapper'>
      <div className='global-container section-basic'>
        <UpperText title={'Process'}
                    description={'Предоставляю работу под ключ: от идеи до финальной реализации, но также решаю отдельно взятые задачи.'}/>
                    
        <ProcessList/>
      </div>
    </div>
  );

}

export default Process;