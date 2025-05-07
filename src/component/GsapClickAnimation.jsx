import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';

const GsapClickAnimation = () => {
    const [xMove, setXMove] = useState(0);
    const [rotating, setRotating] = useState(0);
    const boxRef = useRef(null);

    const random = () => gsap.utils.random(-500,500,150)

    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: xMove,
            rotate: rotating,
            duration:2,
            ease: "back",
        })
    },[xMove,rotating])


    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-5'>Gsap Animation By Click</h1>
            <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
                <button onClick={() => {
                    setXMove(random)
                     setRotating(random)
                } } className='btn bg-gradient-to-t from-sky-500 to-indigo-500 text-white px-5 py-2 rounded'
                >
                    Click the animate box
                </button>
                <div
                    ref={boxRef}
                    className='box w-[120px] h-[120px] rounded-[8px] bg-gradient-to-br from-purple-500 to-pink-500'
                ></div>
            </div>
        </div>
    );
};

export default GsapClickAnimation;
