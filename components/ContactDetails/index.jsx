import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { H2, P } from "../ui/textTypes";
import * as s from "./contactdetails.styl";

export default function ContactDetails() {
  const Map = dynamic(() => import("./Map"), {
    loading: () => "Loading...",
    ssr: false,
  });

  const [location, setLocation] = useState({
    latitude: 35.5175,
    longitude: -86.5804,
  });

  const viewOnMapClick = (latitude, longitude) => {
    setLocation({ latitude, longitude });
  };

  return (
    <>
      <div css={s.contactDetailsContainer}>
        <H2 css={s.contactDetailsText}>Contact Details</H2>
        <div css={[{ marginBottom: "40px" }, s.contactContainer]}>
          <div>
            <P css={{ fontWeight: "bold" }}>Main Office</P>
            <P>Mail : archone@mail.com</P>
            <P>Address : 1892 Chenoweth Drive TN</P>
            <P>Phone : 123-456-3451</P>
          </div>
          <ViewMapButton onClick={() => viewOnMapClick(35.5175, -86.5804)} />
        </div>
        <div css={s.contactContainer}>
          <div>
            <P css={{ fontWeight: "bold" }}>Office II</P>
            <P>Mail : archtwo@mail.com</P>
            <P>Address : 3399 Wines Lane TX</P>
            <P>Phone : 832-123-4321</P>
          </div>
          <ViewMapButton onClick={() => viewOnMapClick(31.9686, -99.9018)} />
        </div>
      </div>
      <div css={{ height: "500px" }}>
        <Map latitude={location.latitude} longitude={location.longitude} />
      </div>
    </>
  );
}

function ViewMapButton({ onClick }) {
  return (
    <button onClick={onClick} css={s.viewMapButton}>
      <span css={s.viewMapText}>View on Map</span>
      <Image src="/icons/icon-arrow.svg" width="26" height="20" />
    </button>
  );
}
