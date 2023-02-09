import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
    <div className="lg:p-24 lg:mx-auto md:p-24 md:w-full lg:w-6/12 m-5 px-6 ">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
