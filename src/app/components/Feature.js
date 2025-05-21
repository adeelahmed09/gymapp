"use client"

function Feature({feature}) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[15px] h-[15px] rounded-full bg-[#85A6A2]"></div>
      <p className=" text-[#F2F2F2] text-center w-[90%]">{feature}</p>
    </div>
  )
}

export default Feature
