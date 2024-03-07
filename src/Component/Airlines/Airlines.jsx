import star from '../../assets/star.png';

function Airlines() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-28">Featured Destinations</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 xl:mx-5 lg:mx-5 md:mx-5 mx-0">
        {
            airlines.map((airline,indx) =>(
                <div key={indx} className='xl:flex lg:flex md:flex items-center xl:mx-0 lg:mx-0 md:mx-0 mx-auto'>
                    <img className='xl:mx-0 lg:mx-0 md:mx-0 mx-auto' src={airline.logo} alt={airline.name} />
                    <div className='ml-5 xl:text-start lg:text-start md:text-start text-center'>
                        <p className='text-lg font-medium text-blue-600'>{airline.name}</p>
                        <div className='flex items-center text-sm'>
                            <div className='flex items-center mr-2'>
                                <img className='mr-1' src={star} alt="stars" />
                                <p>{airline.stars}</p>
                            </div>
                            <p>( {airline.review} Review )</p>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Airlines;

const airlines = [
  {
    logo: "https://i.ibb.co/cydy0pK/BBA.png",
    name: "Biman Bangladesh Airlines",
    stars: "4",
    review: "783",
  },
  {
    logo: "https://res.cloudinary.com/dr75v4jup/image/upload/v1709799732/wefadbgdxa1eyv1jtatx.png",
    name: "Singapore Airlines",
    stars: "5",
    review: "752",
  },
  {
    logo: "https://i.ibb.co/WvGZyNk/Emirates.png",
    name: "Emirates",
    stars: "5",
    review: "953",
  },
  {
    logo: "https://i.ibb.co/WvGZyNk/Emirates.png",
    name: "Emirates",
    stars: "5",
    review: "953",
  },
  {
    logo: "https://i.ibb.co/R3Jdn4j/Malaysia.png",
    name: "Malaysia Airlines",
    stars: "3",
    review: "345",
  },
  {
    logo: "https://i.ibb.co/cydy0pK/BBA.png",
    name: "Biman Bangladesh Airlines",
    stars: "4",
    review: "783",
  },
  {
    logo: "https://i.ibb.co/R655B2j/Turkish-Airlines.png",
    name: "TurKish Airlines",
    stars: "5",
    review: "753",
  },
  {
    logo: "https://i.ibb.co/cydy0pK/BBA.png",
    name: "Biman Bangladesh Airlines",
    stars: "4",
    review: "783",
  },
  {
    logo: "https://i.ibb.co/R3Jdn4j/Malaysia.png",
    name: "Malaysia Airlines",
    stars: "3",
    review: "345",
  },
  {
    logo: "https://i.ibb.co/R3Jdn4j/Malaysia.png",
    name: "Malaysia Airlines",
    stars: "3",
    review: "345",
  },
  {
    logo: "https://i.ibb.co/HD033NY/american.png",
    name: "American Airlines",
    stars: "5",
    review: "864",
  },
  {
    logo: "https://i.ibb.co/R655B2j/Turkish-Airlines.png",
    name: "TurKish Airlines",
    stars: "5",
    review: "753",
  },
];
