"use client"

function ReviewCards({name,review,index}) {
  return (
    <div key={index} className="sm:h-[30vh] h-[40vh] px-2 border-2 border-[#f0f0f0] rounded-4xl flex flex-col justify-center items-center">
      <div >
        <h1 className="text-[#f0f0f0] text-xl font-semibold">{name}</h1>
      </div>
      <p className="text-[#f0f0f0] text-center">
        {review}
      </p>
    </div>
  )
}

export default ReviewCards
