import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeLine = () => {
    useGSAP(() => {
        gsap.to(".btn", {
            rotate: 360,
            duration:3,

        })
    },{scope: ".container1"})
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">GSAP TimeLine Like a PRO</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="container border">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="container1 border">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GsapTimeLine;
