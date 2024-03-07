
import image from '../../assets/Isolation_Mode.png';
function Subscribe() {
  return (
    <div className='xl:flex lg:flex md:flex items-center my-28 mx-5'>
        <div className='mr-auto '>
            <img src={image} alt="" />
        </div>
        <div>
            <p className='text-3xl'>Subscribe To Our newsletter!</p>
            <p className='text-xl my-5'>Subscribe To Our Newsletter And Stay Updated</p>
            <input
      className="border border-blue-500 p-5 w-full rounded-xl text-2xl"
      type="text"
      placeholder="Your email"
    />
            <button className='w-full bg-yellow-400 p-5 text-2xl my-5 rounded-xl'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe