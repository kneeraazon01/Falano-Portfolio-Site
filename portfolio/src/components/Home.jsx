import React from "react";
import image from "../assets/karki.jpeg";
const Home = () => {
  return (
    <main className="text-8xl text-indigo-600 text-center">
      <img
        className="absolute object-cover h-full w-full"
        src={image}
        alt={image}
      ></img>
      <section className="relative flex  justify-center min-h-screen lg:pt-64 px-8 ">
        <h1 className="text-7xl text-gray-800 font-bold leading-none lg:leading-snug">
          Namaste!, I am Falano.
          <h3 className="text-5xl">I am a FullStack Developer</h3>
        </h1>
      </section>
    </main>
  );
};

export default Home;
