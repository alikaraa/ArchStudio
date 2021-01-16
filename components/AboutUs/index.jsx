import ArrowButton from "../ui/ArrowButton";
import { H2 } from "../ui/textTypes";

export default function AboutUs() {
  return (
    <>
      <div
        css={{
          alignItems: "center",
          backgroundImage: "url(/home/mobile/image-small-team.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          height: "560px",
          margin: "72px auto",
          paddingLeft: "32px",
          position: "relative",
          width: "100%",
          "@media (min-width: 768px)": {
            backgroundImage: "url(/home/tablet/image-small-team.jpg)",
            paddingLeft: "58px",
            margin: "200px auto",
          },
          "@media (min-width: 1024px)": {
            backgroundImage: "url(/home/desktop/image-small-team.jpg)",
            paddingLeft: "190px",
          },

          "&:before": {
            content: '""',
            backgroundColor: "black",
            opacity: "0.5",
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          },
        }}
      >
        <div
          css={{
            zIndex: 2,
            position: "relative",
            maxWidth: "311px",
            "@media (min-width: 426px)": {
              maxWidth: "445px",
            },
          }}
        >
          <H2 css={{ color: "white" }}>Small team, big ideas</H2>
          <ArrowButton href="/about">About Us</ArrowButton>
        </div>
      </div>
    </>
  );
}
