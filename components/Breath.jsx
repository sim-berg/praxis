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
       return <div className='breathtext'><h1>Was kann ich dir Gutes tun?</h1></div>
    }
    if(loading==2){
      return <div className='breathtext'><h1>Was ist deine aktuelle Herausforderung?</h1></div>
   }
   if(loading==3){
    return <div className='breathtext'><h1>Innerhalb einer Stunde erhältst du hier</h1></div>
 }
 if(loading==4){
   return <div className='breathtext'><h1>deinen Lösungsansatz und Unterstützung</h1></div>
}
    return (
      <div className='breathtext'><h1>Herzlich Willkommen</h1><h1>Hier gehts weiter</h1><p className='arrow-down'>&#8659;</p></div>
    );
};




export default Breath