import Image from "next/image";
import { LargeGreyText, H2, P } from "../ui/textTypes";
import * as s from "./welcome.styl";

export default function Welcome() {
  return (
    <div css={s.welcomeContainer}>
      <LargeGreyText css={s.headerText}>Welcome</LargeGreyText>
      <div css={s.body}>
        <H2 css={s.subHeaderText}>Welcome to Arch Studio</H2>
        <P>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </P>
        <P>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </P>
        <P>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </P>
      </div>
      <div css={s.image}>
        <Image
          src="/home/desktop/image-welcome.jpg"
          width="350"
          height="568"
          alt="welcome-image"
        />
      </div>
    </div>
  );
}
