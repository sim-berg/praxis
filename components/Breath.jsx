import React from 'react'
import { useEffect, useState } from 'react';
function Breath() {

 
const [loading, setLoading] = useState(1);
    useEffect(() => {

      setTimeout(() => {
         setLoading(2)
      }, 5000)
      setTimeout(() => {
        setLoading(3)
     }, 10000)
     setTimeout(() => {
      setLoading(4)
   }, 15000)
   setTimeout(() => {
      setLoading(5)
   }, 20000)

    }, [])
  

    if(loading== 1){
       return <div className='breathtext'><h1>Einmal tief einatmen</h1></div>
    }
    if(loading==2){
      return <div className='breathtext'><h1>haaaalten ....</h1></div>
   }
   if(loading==3){
    return <div className='breathtext'><h1>und ausatmen</h1></div>
 }
 if(loading==4){
   return <div className='breathtext'><h1>Willkommen auf meiner Praxis-Website</h1></div>
}
    return (
      <div className='breathtext'><h1>Willkommen auf meiner Praxis-Website</h1><h1>Hier gehts los</h1><p className='arrow-down'>&#8659;</p></div>
    );
};




export default Breath