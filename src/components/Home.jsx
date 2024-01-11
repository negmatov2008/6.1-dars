import Main from "./main";
import Navbar from "./navbar";
import Footer from "./footer";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
Home();

export default Home;
