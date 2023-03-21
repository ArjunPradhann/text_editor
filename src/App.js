import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar
        aboutTopic="TextUtils"
        first="Home"
        second="About"
        third="Contact Us"
      />
      <TextForm heading="Text Area" />
      <About />
    </>
  );
}

export default App;
