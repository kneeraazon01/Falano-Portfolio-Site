import React, { useState, useEffect } from "react";
import SanityClient from "../client";
import { Link } from "react-router-dom"
const Blog = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(`*[_type="post"]{
      title,slut,mainImage{
        asset-> {
          _id,
          url,

        },
        alt
      }
    }`)
      .then((data) => setBlogData(data))
      .catch(console.error);
  });
  return (
    <>
      <main className="bg-gray-100 min-h-screen p-12 ">
        <section className="container mx-auto ">
          <h1 className="text-5xl flex justify-center">Blog Posts Page</h1>
          <h2 className="text-lg flex justify-center mb-12">Here You can Find all the articles by Falano to date</h2>
          <div className="grid md:grid-rows-2 lg:grid-row-3 gap-8">
            {blogData && blogData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span className="block h-64  relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="h-full w-full rounded-r object-cover absolute" />
                    <span className="block  justify-end relative h-full items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg px-3 py-4 font-bold bg-red-700  bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>

  );
};

export default Blog;
