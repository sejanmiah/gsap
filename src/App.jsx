// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";
// import "./App.css";
// import GsapAnimationByClick from "./component/GsapAnimationByClick";
// import GsapContextSafe from "./component/GsapContextSafe";
import GsapClickAnimation from "./component/GsapClickAnimation";




function App() {

  // const boxRef = useRef();
  // useGSAP(() => {
  //   gsap.to(boxRef.current,{
  //     x:600,
  //   })
  // })

  // useGSAP(() => {
  //   gsap.from(".box",{
  //     x: 1000,
  //     delay: 1,
  //     duration: 2,
  //     rotate: 360,
  //     borderRadius:50,
  //     backgroundColor: "crimson",
  //   })
  // })

  // const boxRef = useRef();
  // useGSAP(() => {
  //   gsap.to(boxRef.current,{
  //     x: 360,
  //     delay: 1,
  //     duration: 3,
  //     backgroundColor: "pink",
  //     rotate: 360,
  //     borderRadius: 50,
  //   })
  // })

  // const textRef = useRef();
  // useGSAP(() => {
  //   gsap.to(textRef.current,{
  //     y: 300,
  //     fontSize: 39,
  //     delay: 1,
  //     duration: 3,
  //     color: "black",
  //     fontWeight: 900,
  //     border: 4,
  //     padding: 10,
  //     opacity: .4,
  //   })
  // })
 
  // const spanRef= useRef();
  // useGSAP(() => {
  //   gsap.to(spanRef.current, {
  //     color: "red",
  //     backgroundColor: "pink",
  //     delay: 1,
  //     duration:3,
  //     padding: 5,
  //     borderRadius: 5,
  //     opacity: 1,
  //   })
  // })
  return (
    <>
      {/* <div ref={boxRef} className="box h-40 w-40 bg-amber-800"></div>
      <div className="flex justify-center">

      <h1 ref={textRef} >Hello <span ref={spanRef}>GSAP </span> </h1>
      </div> */}

    
        <GsapClickAnimation></GsapClickAnimation>




    </>
  );
}

export default App;
