"use client"

import Carousel from "./Carousel"
import Feature from "./Feature"


function AboutUs() {
    return (
        <div className="w-full flex  gap-5 flex-col items-center bg-[#0D0D0D]">
            <h1 className="text-[#85A6A2] w-full text-6xl font-bold tracking-tighter text-center pt-[12vh]">About Us</h1>
            <p className="sm:w-[50vw] w-[90%] text-center mt-5 text-lg text-[#F2F2F2]">
                At Forge Gym, we believe fitness is more than just a workout — it's a lifestyle.
                Founded with a passion for helping people transform their bodies and minds, our gym is a place where everyone, from beginners to pros, is welcomed and supported.

                With state-of-the-art equipment, certified trainers, and a motivating environment, we're here to help you crush your goals — one rep at a time.
            </p>
            <h1 className="mt-2 text-2xl text-[#85A6A2] font-semibold">
                Key Features
            </h1>
            <div className="w-[80%] grid gap-y-5 sm:grid-cols-3 mt-2">
                <Feature feature={"Latest machines and free weights for cardio, strength, and functional training."}/>
                <Feature feature={"Get expert guidance tailored to your fitness goals."}/>
                <Feature feature={"From HIIT and yoga to spinning and strength — fun, motivating, and community-driven."}/>
                <Feature feature={"Workout anytime with secure entry for members."}/>
                <Feature feature={"Personalized meal plans, supplements, and wellness advice."}/>
                <Feature feature={"Clean, modern, and convenient amenities for pre- or post-workout."}/>
            </div>
            <div className="w-full mt-2  flex justify-center items-center ">
                <h1 className="text-2xl text-[#85A6A2] font-semibold">Reviews</h1>
            </div>
            <div className="sm:w-[90vw] w-[80vw]  ">
                <Carousel/>
            </div>
        </div>
    )
}

export default AboutUs
