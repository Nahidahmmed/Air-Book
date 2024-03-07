

function Destinations() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-10">Featured Destinations</h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  gap-20 my-10">
          {
            destinations.map((destination,indx) =>(
              <div key={indx} className="w-[350px] bg-white px-4 py-4 mx-auto rounded-2xl space-y-6 shadow-2xl shad">
            {/* Card Image */}
                <img className="w-[400px] bg-gray-400 rounded-2xl" src={destination.imgae} alt="card navigate ui" />
                {/* Card Heading */}
                <div className="space-y-2">
                    <h2 className="text-slate-800 font-medium text-2xl ">{destination.title}</h2>
                    <p className="text-lg">{destination.text}</p>
                </div>
                {/* Price and action button */}
                <div className="mt-5 flex justify-between items-center font-medium">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-yellow-600 mx-auto">View More</button>

                </div>
            </div>
            ))
          }
      </div>
    </div>
  )
}

export default Destinations

const destinations = [
  {
    imgae: "https://i.ibb.co/f19RhSM/istanbul.png",
    title: "Istanbul",
    text: "stopover Opportunity in Istanbull with Turkih Airlines"
  },
  {
    imgae: "https://i.ibb.co/LnHV0FF/turkey.png",
    title: "Tour Istanbul",
    text: "Discover the timeless city with Tour Istanbul of Turkish Airlines"
  },
  {
    imgae: "https://i.ibb.co/3k5wWVd/Abu-Dhabi.png",
    title: "Abu Dhabi",
    text: "The best of Abu Dhabi with exclusive Etihad Airways"
  },
]