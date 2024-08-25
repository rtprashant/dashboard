import React from 'react'
import ChildDashboard from './ChildDashboard'
import DummyData from './DummyData.json'


function ParentDashboard() {
   
    const w_name ='cdcc'
    const d_names = 'xyz'
    // const d_names = DummyData?.dashboard.categories?.map((cat) => cat.name) || [];
    // const firstCategory = DummyData?.dashboard?.categories[0];
    // const firstWidget = firstCategory?.widgets?.[0];
    // const graphopt = firstWidget?.options;
    // const graphdata = firstWidget?.data;

    if (d_names.length === 0) {
      return <div>No categories available</div>;
    }
  
  return (
    <div>
        <div className='bg-[#F0F5F9] p-10'>
           <div className='flex justify-between'>
           <div className='font-sans font-bold'>
               CNAPP Dashboard
            </div>
            <div className='flex gap-3'>
                <div className='border text-[12px] p-2 font-semibold text-gray-500 rounded-lg px-3'>Add Widget +</div>
                <div className='border text-[12px] p-2 font-semibold text-gray-500 rounded-lg px-3'>
                <i class="fa-solid fa-arrows-rotate"></i>
                </div>
                <div className='border text-[12px] p-2 font-semibold text-gray-500 rounded-lg px-3'>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className='border border-blue-900  p-2 font-semibold text-blue-900 rounded-lg px-3 flex gap-1'>
                    <div>
                    <i class="fa-solid fa-clock"></i>
                    </div>
                    <div className='border border-blue-900 '>

                    </div>
                    <div>
                        <select name="" className='bg-transparent text-[15px]  ring-blue-900 border-none'>
                        <option value="0">Last 24 Hours</option>
                            <option value="1">Last 2 Days</option>
                            <option value="2">Last 3 Days</option>
                            <option value="3">Last 4 Days</option>
                            <option value="4">Last 5 Days</option>
                        </select>

                    </div>
                </div>

            </div>
           </div>
           <ChildDashboard dashboard_name={d_names} widget_name={w_name}/>
           


        </div>
       
      
    </div>
  )
}

export default ParentDashboard
