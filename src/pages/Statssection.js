import React from 'react'

const Statssection = () => {
  return (
    <div className='mt-10  mb-10'>
      <h1 >Stats Section</h1>
      <div className='grid grid-cols-4 gap-5 mt-10'>
     
     
     <div className='relative'>
      <div> <p className='shadow text-white font-bold text-8xl'>890</p></div>
       <div className='flex flex-row justify-center space-x-3 absolute left-0 top-7'>
           <h1 className='font-bold text-3xl'>890</h1>
           <p className='font-semibold'>Deliver <br/> Package</p>
       </div>
     </div>


   
      <div className='relative'>
        <div> <p className='shadow text-white font-bold text-8xl '>137</p></div>
       <div className='flex flex-row justify-center space-x-3 absolute left-0 top-7'>
           <h1 className='font-bold text-3xl'>137</h1>
           <p className='font-semibold'>Countries <br/> Coverd</p>
       </div>
     </div>
    
     <div className='relative'>
      <div><p className='shadow text-white font-bold text-8xl'>740</p></div> 
       <div className='flex flex-row justify-center space-x-3 absolute left-0 top-7'>
           <h1 className='font-bold text-3xl'>740</h1>
           <p className='font-semibold'>Tons <br/> of Goods</p>
       </div>
       </div>
  


    
       <div className='relative '>
        <div ><p className='shadow text-white font-bold text-8xl'>600</p></div>
        <div className='flex flex-row justify-center space-x-5 absolute left-0 top-7 '>
           <h1 className='font-bold text-3xl '>600</h1>
           <p className='font-semibold'>Satisfied <br/> Client</p>
       </div>
       
      
     </div>
   </div>
    </div>
    
  )
}

export default Statssection
