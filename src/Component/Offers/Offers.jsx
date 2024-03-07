

function Offers() {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-10 mt-20">Deals And Offers</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
                offers.map((offer,indx)=>(
                    <div key={indx} className="flex items-center bg-white shadow-2xl border-[#dfdbdb3f] border-2 rounded-xl ">
                        <img src={offer.imgae} alt="" />
                        <div className="ml-2">
                            <p className="text-base mb-2">{offer.title}</p>
                            <p className="text-xl text-blue-500 font-medium">{offer.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Offers;

const offers = [
    {
        imgae: "https://res.cloudinary.com/dr75v4jup/image/upload/v1709795527/zuv4vbhxofh4h2nykdg4.png",
        title: "With BKash Payment Only",
        text: "Up To 14% Discount On The Base Fare Of Domestic Flights"
    },
    {
        imgae: "https://res.cloudinary.com/dr75v4jup/image/upload/v1709795569/m558zjbosdxlbv10walt.png",
        title: "With BKash Payment Only",
        text: "Up To 14% Discount On The Base Fare Of Domestic Flights"
    },
    {
        imgae: "https://res.cloudinary.com/dr75v4jup/image/upload/v1709795596/yrzt6wq9bkltnslflhuy.png",
        title: "With BKash Payment Only",
        text: "Up To 14% Discount On The Base Fare Of Domestic Flights"
    }
]