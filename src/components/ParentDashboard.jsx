import { useState } from 'react'
import React from 'react'
import ChildDashboard from './ChildDashboard'
import DummyData from './DummyData.json'
function ParentDashboard() {
   const [dashboard, setdeshboard] = useState(DummyData.dashboard.categories);
   const [isOpen , setIsOpen] = useState(false)
   const [selectedCategory, setSelectedCategory] = useState('');
   const [newWidgetName, setNewWidgetName] = useState('');
    const handleWidgetAdd = ()=>{
        console.log('clicked');
        setIsOpen(true)
        console.log(isOpen)
    }
    const handleWidgetClose = ()=>{
        setIsOpen(false)
    }
    const selectedCat = dashboard.find((category)=> category.id ===selectedCategory)?.widgets
    console.log(`selected catogory : ${selectedCat}`);
  return (
    <div className='bg-[#F0F5F9]'>
       {!isOpen && (
         <div className='bg-[#F0F5F9] p-10'>
         <div className='flex justify-between'>
         <div className='font-sans font-bold'>
             CNAPP Dashboard
          </div>
          <div className='flex gap-3'>
              <button className='border text-[12px] p-2 font-semibold text-gray-500 rounded-lg px-30' onClick={handleWidgetAdd}>Add Widget +</button>
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
          {dashboard.map((category) => (
      <div key={category.id} className='my-4'>
        <div className='font-sans font-bold text-[14px] ml-4'>
          {category.name}
        </div>
        <div className='flex flex-wrap gap-4 '>
          {category.widgets.map((widget) => (
            <ChildDashboard
              key={widget.id}
              dashboard_name={category.name}
              widget_name={widget.name}
            />
          ))}
        </div>
      </div>
    ))}
         


      </div>
       )}

        {isOpen && (<div>
            
            <div className='modal   flex justify-between'>
            <div className='bg-[#F0F5F9] p-10'>
         <div className='flex justify-between'>
         <div className='font-sans font-bold'>
             CNAPP Dashboard
          </div>
          <div className='flex gap-3'>
              <button className='border text-[12px] p-2 font-semibold text-gray-500 rounded-lg px-30' onClick={handleWidgetAdd}>Add Widget +</button>
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
         
         {/* {dashboard.map((dash) => (
          <div key={dash.id} className=''> 
          {dash.widgets.map((wid)=>(<ChildDashboard key={wid.id} dashboard_name={dash.name
          } widget_name={wid.name}/>))}
              </div> 
          
          ))} */}
          {dashboard.map((category) => (
      <div key={category.id} className='my-4'>
        <div className='font-sans font-bold text-[14px] ml-4'>
          {category.name}
        </div>
        <div className='flex flex-wrap gap-4 '>
          {category.widgets.map((widget) => (
            <ChildDashboard
              key={widget.id}
              dashboard_name={category.name}
              widget_name={widget.name}
            />
          ))}
        </div>
      </div>
    ))}
         


      </div>
                        <div className='modal-content  font-sans  bg-white w-[30vw] '>
                            <div className='bg-blue-900 flex items-center justify-between'>
                            <h3 className='font-semibold   text-white h-8 pt-1 pl-2'>Add  Widget</h3>
                            <button onClick={handleWidgetClose} className='text-white text-[20px] pr-5'><i class="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            <label className='font-semibold ml-2 '>
                                Select Category:<br/>
                                <select className='ml-2 border-black ring-1 ring-black'
                                 onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                                    <option value="">Select Category</option>
                                    {dashboard.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </label>
                            <br/>
                            <label className='font-semibold ml-2 '>
                                Widget Name:<br/>
                                <select className='ml-2 border-black ring-1 ring-black'
                                 onChange={(e)=>setNewWidgetName(e.target.value)} value={newWidgetName}>
                                    <option value="">Select Widget</option>
                                    {selectedCategory && selectedCat.map((widget)=>(
                                        <option key={widget.id} value={widget.id}>{widget.name}</option>
                                    ))}
                                 </select>
                            </label><br/>
                            <button className='border ml-2 mt-2 px-2 bg-blue-900 text-white'>Add Widget</button> 
                        </div>
                    </div>
        </div>)}
       
      
    </div>
  )
}

export default ParentDashboard
