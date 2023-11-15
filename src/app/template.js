import Header from "./components/header";
import Footer from "./components/footer";

export default function Template({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
