import type { NextPage } from "next";
import Image from "next/image";
// import "../styles/About.module.css";
import { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const About: NextPage = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div>
      <Parallax pages={4} ref={parallax}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(/moon.png)`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(/space.jpg)`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(/land.png)`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5, end: 3 }}
          style={{ textAlign: "center" }}
        >
          <Image
            src="/cat.gif"
            layout="intrinsic"
            width="200px"
            height="200px"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={-0.2}
          speed={0.05}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
          onClick={() => parallax.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <h2>Hi !!!!!!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default About;
