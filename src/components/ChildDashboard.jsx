import React from 'react'
import { Pie } from 'react-chartjs-2'


function ChildDashboard({dashboard_name , widget_name}) {
  return (
    <div>
        <div className='flex flex-col gap'>
            <div className='font-sans font-bold text-[14px] ml-4'>{dashboard_name}</div>
            <div className='w-1/3 h-64 rounded-3xl bg-[#F2F0F5] flex items-center justify-center'>
            <div className='w-[93%] h-[90%] bg-white rounded-xl p-4'>
                <div className='font-sans font-bold text-[13px] '>
                    {widget_name}
                </div>

            </div>
            

            </div>

        </div>
      
    </div>
  )
}

export default ChildDashboard
