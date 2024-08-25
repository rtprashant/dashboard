import React from 'react'

function Searchbar() {
  return (
    <div className='bg-re500 flex items-center font-sans pl-10 h-10 '>
        <div className='gap-3 flex justify-center'>
      <div className='text-zinc-400 font-sans text-[12px] leading-tight tracking-tighter'>Home</div>
      <i className="fa fa-chevron-right text-zinc-400 mt-1 text-[10px]" aria-hidden="true" ></i>
      <div className='font-bold text-[14px] text-blue-900 mt-[-3px] '>Dashboard V2</div>
      </div>
      <div className='text-gray-500 realtive flex  items-center ml-[30vw]'>
       
      <i class="fa-solid fa-magnifying-glass absolute pl-2   "></i>
        <input type="text" 
        className='rounded-md w-96 pl-7 font-sans border  focus:ring-slate-50'
        placeholder= 'Search anything ...' />
        
      </div>
      <div className='text-zinc-300'>
      <i class="fa-solid fa-bell ml-48"></i>
      </div>
    </div>
  )
}

export default Searchbar
