import Icon from './Icon';

const MultiButton = () => {
  return (
    <div className='w-fit flex '>
        {/* wrapper */}
        <div className="mb-8">
            {/* button 1 */}
            <div className="w-fit inline-block  p-3  
                bg-neutral-100 text-neutral-900  
                border-r-2 border-neutral-200 
                hover:cursor-pointer hover:bg-slate-300 
                rounded-l-lg "
            >
                <div className="flex items-center">  
                    <p className=' font-roboto '>Discover</p>
                </div>
            </div>   
            {/* button 2 */}
            <div className="w-fit inline-block  p-3  
                bg-neutral-100 text-neutral-900
                hover:cursor-pointer hover:bg-slate-300 
                rounded-r-lg ">
                <p className='font-roboto '>Favourites</p>
            </div>
        </div>
    </div>
  )
}

export default MultiButton