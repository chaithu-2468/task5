import React,{useState} from 'react';
import './Style.css';

export default function Calculator() {
    const [date,setDate] = useState();
    const handleOnChange = (event) =>{
      setDate(event.target.value);
    }
    function Age(date){
      const today = new Date()
      const birthDate = new Date(date)
      let ageNow = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        ageNow -= 1
      }
      return ageNow;
    }
   
  return (
    <div className='box'>
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <input type='date' value={date} onChange={handleOnChange} />
      <inpu type='submit' />
      <h2>You are {Age(date)} years old</h2>
    </div>
  )
}