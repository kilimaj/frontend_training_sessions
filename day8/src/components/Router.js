import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Main /</Link>
          <Link to="/product"> Product /</Link>
          <Link to="/aboutus"> About Us /</Link>
          <Link to="/notfound"> Not Found</Link>
        </div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Main = () => {
  return <h1> Main </h1>;
};

const Product = () => {
  return <h1> Product </h1>;
};

const AboutUs = () => {
  return <h1> About Us </h1>;
};

const NotFound = () => {
  return <h1> Not Found </h1>;
};

export default Router;