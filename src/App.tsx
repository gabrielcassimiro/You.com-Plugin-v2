import "./App.css";
import AdditionalOptions from "./components/additionalOptions/AdditionalOptions";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      <AdditionalOptions />
      <Footer />
    </>
  );
}

export default App;
