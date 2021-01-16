import ArrowButton from "../ui/ArrowButton";
import * as s from "./banner.styl";
import { H1, P } from "../ui/textTypes";

export default function Banner() {
  const images = [
    {
      url: "/home/mobile/image-hero-paramour.jpg",
      header: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      url: "/home/mobile/image-hero-seraph.jpg",
      header: "Seraph Station",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      url: "/home/mobile/image-hero-federal.jpg",
      header: "Federal II Tower",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      url: "/home/mobile/image-hero-trinity.jpg",
      header: "Trinity Bank Tower",
      description:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
  ];

  return (
    <div
      css={{
        overflowX: "scroll",
        display: "flex",
        scrollSnapType: "x mandatory",
        padding: "0px 15px",
        "@media (min-width: 426px)": {
          display: "none",
        },
      }}
    >
      {images.map((image) => (
        <div
          css={{ scrollSnapAlign: "center", padding: "0 15px" }}
          key={image.url}
        >
          <div
            css={{
              backgroundImage: `url(${image.url})`,
              width: "375px",
              height: "560px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "32px",
            }}
          >
            <div css={{ maxWidth: "90%" }}>
              <span
                css={{
                  color: "white",
                  marginBottom: "14px",
                  fontSize: "48px",
                  fontWeight: "bold",
                }}
              >
                {image.header}
              </span>
              <P css={{ color: "white" }}>{image.description}</P>
              <ArrowButton href="/portfolio">See our portfolio</ArrowButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
