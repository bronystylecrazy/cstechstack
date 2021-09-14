import { RealtimeSubscription } from '@supabase/realtime-js';
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import {supabase} from './api/db/client';
// import { database, getIconImage } from './api/db/icon';
import BGSlot from '../components/bgslot';
import { getIconImage } from './api/db/icon';
import AddData from '../components/addData';

export default function Home() {
  const [database, setDatabase] = useState([]);

  async function fetchData(from = 'techs'){
    const { data } = await supabase.from(from).select('*');
    if(data == null) return [];
    setDatabase(data);
    return data;
  }

  useEffect(() => {

    fetchData();
    
    let sub = supabase.from('techs').on('*', () => {
      fetchData('techs');
    }).subscribe();

    return () => {
      supabase.removeSubscription(sub);
    };
  },[]);

  function doMargin(idx){
    var isEven = true;
    var index = 0;
    for(var i = 0; i <= idx; i++){
      if(isEven && index >= 8){
        index = 0;
        isEven = false;
        if(idx === i){
          return {marginLeft: '6.125%'}
        }
      }else if(!isEven && index >= 7){
        index = 0;
        isEven = true;
      }
      index++;
    }

    // if(idx > 0 && idx % 8 === 0) return { marginLeft: '6.125%'};
    return {};
  }

  return (
    <div>
      <div className="left">
  <main>
      <header>Hello, Supabase Test</header>
      <section>
        {[...database,'-add-'].map((t,idx) => <>
          { 
          t !== '-add-' ?
            <BGSlot style={doMargin(idx)}>
            <Image src={getIconImage(t.img_url)} alt={t.name} layout="fill"></Image> 
           </BGSlot> :
           <BGSlot style={doMargin(idx)} className="add-warper">
            <Image src={'/icons/add.svg'} className="add"  alt={'add'} layout="fill"></Image>
            </BGSlot>
          }
        </>)}
      </section>
      </main>
      </div>
      <div className="right">

      </div>
      <AddData show={true}/>
    </div>
  )
}
