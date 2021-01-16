import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import PortfolioGrid from "../components/PortfolioGrid";

export default function Portfolio() {
  return (
    <Layout>
      <SideText>Portfolio</SideText>
      <PortfolioGrid data={data} />
    </Layout>
  );
}

const data = [
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-seraph.jpg",
      tablet: "/portfolio/tablet/image-seraph.jpg",
      desktop: "/portfolio/desktop/image-seraph.jpg",
    },
    header: "Seraph Station",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-eebox.jpg",
      tablet: "/portfolio/tablet/image-eebox.jpg",
      desktop: "/portfolio/desktop/image-eebox.jpg",
    },
    header: "Eebox Building",
    date: "August 2017",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-federal.jpg",
      tablet: "/portfolio/tablet/image-federal.jpg",
      desktop: "/portfolio/desktop/image-federal.jpg",
    },
    header: "Federal II Tower",
    date: "March 2017",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-del-sol.jpg",
      tablet: "/portfolio/tablet/image-del-sol.jpg",
      desktop: "/portfolio/desktop/image-del-sol.jpg",
    },
    header: "Project Del Sol",
    date: "January 2016",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-prototype.jpg",
      tablet: "/portfolio/tablet/image-prototype.jpg",
      desktop: "/portfolio/desktop/image-prototype.jpg",
    },
    header: "Le Prototype",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-228b.jpg",
      tablet: "/portfolio/tablet/image-228b.jpg",
      desktop: "/portfolio/desktop/image-228b.jpg",
    },
    header: "228B Tower",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-edelweiss.jpg",
      tablet: "/portfolio/tablet/image-edelweiss.jpg",
      desktop: "/portfolio/desktop/image-edelweiss.jpg",
    },
    header: "Grand Edelweiss Hotel",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-netcry.jpg",
      tablet: "/portfolio/tablet/image-netcry.jpg",
      desktop: "/portfolio/desktop/image-netcry.jpg",
    },
    header: "Netcry Tower",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-hypers.jpg",
      tablet: "/portfolio/tablet/image-hypers.jpg",
      desktop: "/portfolio/desktop/image-hypers.jpg",
    },
    header: "Hypers",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-sxiv.jpg",
      tablet: "/portfolio/tablet/image-sxiv.jpg",
      desktop: "/portfolio/desktop/image-sxiv.jpg",
    },
    header: "SXIV Tower",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-trinity.jpg",
      tablet: "/portfolio/tablet/image-trinity.jpg",
      desktop: "/portfolio/desktop/image-trinity.jpg",
    },
    header: "Trinity Bank Tower",
    date: "April 2015",
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-paramour.jpg",
      tablet: "/portfolio/tablet/image-paramour.jpg",
      desktop: "/portfolio/desktop/image-paramour.jpg",
    },
    header: "Project Paramour",
    date: "April 2015",
  },
];
