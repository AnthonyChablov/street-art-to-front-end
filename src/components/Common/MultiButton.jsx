import Icon from './Icon';

const MultiButton = () => {
  return (
    <div className='w-fit flex '>
        {/* wrapper */}
        <div className="mb-6">
            {/* button 1 */}
            <div className="w-fit inline-block  p-3 
                bg-neutral-700 text-zinc-200  
                border-r-2 border-neutral-800 
                hover:cursor-pointer hover:bg-neutral-600 
                rounded-l-lg text-sm pl-5"
            >
                <div className="flex items-center">  
                    <p className=' font-roboto '>Discover</p>
                </div>
            </div>   
            {/* button 2 */}
            <div className="w-fit inline-block p-3
                bg-neutral-700 text-zinc-200 
                hover:cursor-pointer hover:bg-neutral-600 
                rounded-r-lg text-sm">
                <p className='font-roboto'>Favourites</p>
            </div>
        </div>
    </div>
  )
}

export default MultiButton