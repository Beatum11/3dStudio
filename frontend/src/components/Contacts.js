import React from 'react';
import {useClientState} from '../customHooks/useClientState';
import {useSubmitClient} from '../customHooks/useSubmitClient';
import '../cssFiles/contacts.css';
import UpperText from './layout-parts/UpperText';
import Button from './elements/Button';

const Contacts = () => {

  const {client, changeHandler, resetClient} = useClientState();
  const postHandler = useSubmitClient(client, resetClient);


  return (
    <section className='contacts-wrapper'>
      <div className='global-container section-basic'>
          <UpperText title={'Contacts'}
                      description={'Заполните форму и я свяжусь с вами в течение 24 часов.'}/>
          <form className='contacts-form' onSubmit={postHandler}>

              <input type={'text'} placeholder={'Ваше имя'}
                                   value={client.name} 
                                   name='name'
                                   onChange={changeHandler}/>

              <input type={'tel'} placeholder={'Ваше номер телефона'}
                                  value={client.number} 
                                  name='number'
                                  onChange={changeHandler}/>

              <input type={'email'} placeholder={'Ваше email'}
                                    value={client.email} 
                                    name='email'
                                    onChange={changeHandler}/>
              <Button action={'submit'} text={'Отправить'}/>
          </form>
      </div>
    </section>
  )
}

export default Contacts;