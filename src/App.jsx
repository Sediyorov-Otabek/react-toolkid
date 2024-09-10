import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import BlogsCreate from "./components/blogs/BlogsCreate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <BlogsCreate />
    </>
  );
}

export default App;
