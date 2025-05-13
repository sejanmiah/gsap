import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const containerRef = useRef(null);
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);


  useEffect(() => {
    if (posts.length > 0) {
      const cards = gsap.utils.toArray(".card-animate");

      gsap.to(cards, {
          y: -200,
          opacity:1,
        duration: 1.2,
        stagger: 0.1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions:"restart none none none",
          markers:true,
        },
      });
    }
  }, [posts]);

  return (
    <div ref={containerRef} className="my-20 px-10">
      <h1 className="text-5xl font-bold text-center mb-40">Service Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card opacity-0 card-animate bg-base-100 shadow-lg p-5 border border-gray-200 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm">{post.body}</p>
            <div className="mt-4 flex justify-end">
              <button className="btn btn-primary btn-sm">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
