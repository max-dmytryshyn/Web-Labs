import { Header } from "./components/homepage/header/Header";
import { Main } from "./components/homepage/main/Main";
import { Footer } from "./components/homepage/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
