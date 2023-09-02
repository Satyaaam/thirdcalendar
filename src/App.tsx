import React, { useState } from 'react'
import { generateDate, months } from './util/Calendar'
import dayjs from "dayjs"
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

const App = () => {
  console.log(generateDate());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const currentDate = dayjs()

  const [today, setToday] = useState(currentDate)



  return (
    <>
      <h1>Dates</h1>
      <div className='h-96 w-96'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between text-bold text-xl items-center w-full'>
            <GrFormPrevious className={"font-semibold cursor-pointer"} size={30} onClick={()=>{
              setToday(today.month(today.month() - 1))
            }}/>
            <div className='flex gap-3 font-semibold'>
              <span>{today.date()}</span>
              <span>{months[today.month()]}</span> 
              <span>{today.year()}</span>
            </div>
            <GrFormNext className={"font-semibold cursor-pointer"} size={35} onClick={()=>{
              setToday(today.month(today.month() + 1))
            }}/>
          </div>
        </div>
        {/* // days name */}
        <div className='grid grid-cols-7'>
          {
            days.map((day,index)=>{
              return(
                <div key={index} className='h-9 text-[#A7A7A7] hover:text-[#898989] font-semibold cursor-pointer flex justify-center items-center'>
                  {day}
                </div>
              )
            })
          }
        </div>
        <div className='h-full w-full grid grid-cols-7 gap-3'>
          {
            generateDate(today.month(),today.year()).map(({date, currentMonth, today},index)=>{
              return(
                <div key={index} className={`${currentMonth ? `text-black ${today && "bg-[#0F52BA] text-white hover:bg-red-700"}` : "text-gray-400"}  h-9 hover:bg-[#2AA39C] hover:text-white  flex justify-center items-center rounded-[10px] cursor-pointer`}>
                  <h1>{date.date()}</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App