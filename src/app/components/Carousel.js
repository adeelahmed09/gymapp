"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCards from "./ReviewCards"
const reviewData = [
    {
        name:"Emily R.",
        review: "Joining this gym changed my life! The trainers are super motivating and the atmosphere is amazing. I feel stronger and more confident every week",
    },
    {
        name:"Jason M.",
        review:"Clean facilities, top-notch equipment, and staff who genuinely care. I've hit goals here I never thought possible. Highly recommend to anyone serious about fitness!",
    },
    {
        name:"Priya S.",
        review:"As a beginner, I was nervous, but the team made me feel welcome from day one. The classes are fun and challenging, and I've made great friends along the way!",
    },
    {
        name:" Ahmed K.",
        review:"Open 24/7, awesome vibe, and no waiting for equipment. This place is perfect for early risers and night owls alike. It's my second home now.",
    },
    {
        name:"Laura D.",
        review:"Love the variety of workouts and the supportive community. The personal trainers push you just enough to grow without burning out. Best decision I've made this year!",
    },

]
function Carousel() {
    const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    return(
        <>
        <Slider {...settings}>
        {reviewData.map((d,index)=>(
            <ReviewCards name={d.name} review={d.review} index={index}/>
        ))}
        </Slider>
        </>
    )
}

export default Carousel
