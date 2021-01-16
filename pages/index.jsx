import Banner from "../components/Banner";
import MobileBanner from "../components/Banner/MobileBanner";
import TabletBanner from "../components/Banner/TabletBanner";
import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Welcome from "../components/Welcome";
import Featured from "../components/Featured";
import AboutUs from "../components/AboutUs";

export default function IndexPage() {
  return (
    <Layout>
      <SideText>Home</SideText>
      <Banner />
      <MobileBanner />
      <TabletBanner />
      <Welcome />
      <AboutUs />
      <Featured data={imageData} />
    </Layout>
  );
}

const imageData = [
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-del-sol.jpg",
      tablet: "/portfolio/tablet/image-del-sol.jpg",
      desktop: "/portfolio/desktop/image-del-sol.jpg",
    },
    header: "Project Del Sol",
    number: 1,
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-228b.jpg",
      tablet: "/portfolio/tablet/image-228b.jpg",
      desktop: "/portfolio/desktop/image-228b.jpg",
    },
    header: "228B Tower",
    number: 2,
  },
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-prototype.jpg",
      tablet: "/portfolio/tablet/image-prototype.jpg",
      desktop: "/portfolio/desktop/image-prototype.jpg",
    },
    header: "Le Prototype",
    number: 3,
  },
];
