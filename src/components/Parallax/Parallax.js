import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./Parallax.css";

export default function ParallaxComponent() {
  return (
    <ParallaxBanner
      layers={[
        { image: require("../../media/ParallaxBG.png"), translateY: [0, 70] },
        {
          speed: 0,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="nameText">Brian Lui</h1>
            </div>
          ),
        },
        { image: require("../../media/ParallaxMG.png"), translateY: [0, 30] },
        { image: require("../../media/ParallaxFG.png"), translateY: [0, 40] },
      ]}
      style={{ aspectRatio: "1/1" }}
    ></ParallaxBanner>
  );
}
