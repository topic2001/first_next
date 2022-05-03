import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ttamttun.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function App() {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    videoRef.current.currentTime = 0;

    ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: IntroVideoRef.current,
      start: "center center",
      end: "+=2000",
      markers: true,

      onUpdate: function (self) {
        if (videoRef.current) {
          const scrollPos = self.progress;
          const videoDuration = videoRef.current.duration;
          const videoCurrentTime = videoDuration * scrollPos;

          if (videoCurrentTime) {
            videoRef.current.currentTime = videoCurrentTime;
          }

          console.log(videoDuration, scrollPos, videoCurrentTime);
        }
      },
    });
  }, [IntroVideoRef, videoRef]);

  return (
    <>
      <div ref={IntroVideoRef} className={styles.intro}>
        <video id="video" ref={videoRef} src="/ttamttun8.mp4"></video>
      </div>
      <section className={styles.sec}>
        <h1>SECTION</h1>
      </section>
    </>
  );
}
