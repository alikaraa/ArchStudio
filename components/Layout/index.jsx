import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div
        css={{
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
          "@media (min-width: 426px)": { padding: "0 32px" },
          "@media (min-width: 768px)": { padding: "0 100px" },
          "@media (min-width: 1100px)": { padding: "0 165px" },
        }}
      >
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
