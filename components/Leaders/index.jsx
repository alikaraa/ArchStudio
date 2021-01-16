import Leader from "./Leader";
import { H2 } from "../ui/textTypes";
import * as s from "./leaders.styl";

export default function Leaders() {
  const images = [
    {
      url: "/about/desktop/avatar-jake.jpg",
      name: "Jake Richards",
      title: "Chief Architect",
    },
    {
      url: "/about/desktop/avatar-thompson.jpg",
      name: "Thompson Smith",
      title: "Head of Finance",
    },
    {
      url: "/about/desktop/avatar-jackson.jpg",
      name: "Jackson Rourke",
      title: "Lead Designer",
    },
    {
      url: "/about/desktop/avatar-maria.jpg",
      name: "Maria Simpson",
      title: "Senior Architect",
    },
  ];
  return (
    <div css={s.leadersContainer}>
      <H2 css={s.headerText}>The Leaders</H2>
      <div css={s.imgsContainer}>
        {images.map((img) => (
          <Leader
            imageUrl={img.url}
            name={img.name}
            title={img.title}
            key={img.url}
          />
        ))}
      </div>
    </div>
  );
}
