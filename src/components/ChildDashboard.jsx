import React, { useState } from 'react'
import DummayData from './DummyData.json'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend, Title)


function ChildDashboard({ dashboard_name, widget_name }) {


  const selectedCategory = DummayData.dashboard.categories.find((category) => category.name === dashboard_name)
  console.log(selectedCategory);

  // const selectedwidget =selectedCategory?.widgets.map(
  // (widget)=>widget.name)
  // console.log(selectedwidget);

  const selectedWidget = selectedCategory?.widgets.find(
    (widget) => widget.name === widget_name
  );
  console.log(selectedWidget);
  const labels = selectedWidget.data.labels;
  const colors = selectedWidget.data.datasets[0].backgroundColor;
  if (!selectedWidget || !selectedWidget.data || !selectedWidget.data.labels) {
    return (
      <div className='flex flex-col gap'>
        <div className='font-sans font-bold text-[14px] ml-4'>
          {dashboard_name}
        </div>
        <div className='w-1/3 h-64 rounded-3xl bg-[#F2F0F5] flex items-center justify-center'>
          <div className='w-[93%] h-[90%] bg-white rounded-xl p-4'>
            <div className='font-sans font-bold text-[13px]'>
              No Data Available
            </div>
          </div>
        </div>
      </div>
    );
  }




  return (
    <div>
      {(<div className='flex flex-col  '>

        <div className='w-[30vw] h-64 rounded-3xl bg-[#F2F0F5] flex items-center justify-center  '>
          <div className='w-[93%] h-[90%] bg-white rounded-xl p-5 '>
            <div className='font-sans font-bold text-[13px]  w-[20vw] h-[13vw] flex '
            >
              {widget_name}
              <div className=' '>
                <Pie options={selectedWidget.options} data={selectedWidget.data} />
              </div>
              <div className='flex flex-col items-start mt-2 ml-10 p-2'>
                {/* Align labels with corresponding colors */}
                {labels.map((label, index) => (
                  <div key={index} className='flex items-center mb-1 gap-3 '>
                    <div
                      className='w-2 h-2 rounded-full '
                      style={{ backgroundColor: colors[index] }}
                    ></div>
                    <span className='text-[10px] w-full'>{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>


        </div>

      </div>)}


    </div>
  )
}

export default ChildDashboard
