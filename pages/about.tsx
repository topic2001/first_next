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
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(/land.png)`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <Image src="/cat.gif" layout="fill" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => parallax.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <h2>Hi Mom!!!!!!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default About;
