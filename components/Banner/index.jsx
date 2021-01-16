import { useState } from "react";
import BannerButton from "./BannerButton";
import ArrowButton from "../ui/ArrowButton";
import * as s from "./banner.styl";
import { H1, P } from "../ui/textTypes";

export default function Banner() {
  const images = [
    {
      url: "/home/desktop/image-hero-paramour.jpg",
      header: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      url: "/home/desktop/image-hero-seraph.jpg",
      header: "Seraph Station",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      url: "/home/desktop/image-hero-federal.jpg",
      header: "Federal II Tower",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      url: "/home/desktop/image-hero-trinity.jpg",
      header: "Trinity Bank Tower",
      description:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
  ];

  const [currentImg, setCurrentImg] = useState(images[0]);

  const changeImg = (index) => {
    setCurrentImg(images[index]);
  };

  return (
    <div
      css={[
        s.banner,
        s.bannerOverlay,
        { backgroundImage: `url(${currentImg.url})` },
      ]}
    >
      <div css={s.textContainer}>
        <H1 css={{ color: "white", marginBottom: "14px" }}>
          {currentImg.header}
        </H1>
        <P css={{ color: "white" }}>{currentImg.description}</P>
        <ArrowButton href="/portfolio">See our portfolio</ArrowButton>
      </div>
      <div css={s.buttonContainer}>
        {images.map((img, index) => (
          <BannerButton
            key={img.header}
            onClick={() => {
              changeImg(index);
            }}
            css={currentImg.url === img.url && s.activeButton}
          >
            {`0${index + 1}`}
          </BannerButton>
        ))}
      </div>
    </div>
  );
}
