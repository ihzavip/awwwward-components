import "swiper/css/bundle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode } from "swiper";
import { Fragment } from "react";

const datas = [
  {
    source:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    content: {
      title: "Digital Strategy",
      desc: "Behind the leaves. ",
      link: "#link-test",
      key: 1,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: {
      title: "Branding",
      desc: "Minimal eucalyptus leaves",
      key: 2,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
    content: {
      title: "Web Development",
      desc: "Rubber Plant",
      key: 3,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80",
    content: {
      title: "User Interface",
      desc: "Person holding leaf plant",
      key: 4,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    content: {
      title: "Digital Marketing",
      desc: "Green leafed plant photography",
      key: 5,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    content: {
      title: "Sales",
      desc: "Gree leafed plant in focus photography",
      key: 6,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    content: {
      title: "Tools that I used",
      desc: "I took the shot at home with Sigma 105 mm",
      key: 7,
    },
  },
];

// const Slide = ({ imageSource, content }) => {
//   return (
//     <div className="slide">
//       <div className="preview">
//         <img src={imageSource} alt="The Plant" draggable="false" />
//       </div>
//       <a href={content.link} className="infos">
//         <h3>
//           {content.title} <sup>{`0${content.key}`}</sup>
//         </h3>
//         <h2>{content.desc}</h2>
//       </a>
//     </div>
//   );
// };

export default function App() {
  return (
    <section className="mt-20">
      <h2>Expertise</h2>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={2}
        freeMode={true}
        centeredSlides={true}
        modules={[FreeMode]}
        className="mySwiper  w-full h-full"
      >
        {datas.map((data, index) => {
          return (
            <SwiperSlide className="mx-6 w-60 min-h-[450px] " key={index}>
              <div className="w-60 h-60">
                <img
                  className="object-cover w-full h-full object-center grayscale"
                  src={data.source}
                  alt={data.title}
                />
              </div>

              <a href={data.content.link} className="block mt-4">
                <h3>
                  {data.content.title} <sup>{`0${data.content.key}`}</sup>
                </h3>
                <h2>{data.content.desc}</h2>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
