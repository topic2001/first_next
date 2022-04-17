import React from "react";
import styles from "../styles/Home.module.css";

export default function App() {
  // // load 27 random images from picsum
  // var fragment = document.createDocumentFragment();
  // for (var i = 0; i < 27; i++) {
  //   // create photo div
  //   var photo = document.createElement("div");
  //   // add data-scroll attribute so ScrollOut will target these elements
  //   photo.setAttribute("data-scroll", "");
  //   // load the photo as a background image so it will fit nicely
  //   photo.style.backgroundImage =
  //     "url(https://picsum.photos/400/300/?random&hash=" + i + ")";
  //   fragment.appendChild(photo);
  // }
  // // append document fragments to container
  // document.querySelector(".container").appendChild(fragment);

  // // call scrollout with variables enabled
  // ScrollOut({
  //   threshhold: 0.5,
  //   cssProps: {
  //     visibleY: true,
  //   },
  // });
  return (
    <div className={styles.container}>
      {new Array(27).fill(0).map((_, idx) => (
        // <Food key={idx} dd={idx} />
        <div
          className={styles.photo}
          key={idx}
          data-scroll=""
          style={{
            backgroundImage: `url("https://picsum.photos/400/300/?random&hash=${idx}")`,
          }}
        ></div>
      ))}
    </div>
  );
}

// function Food({ dd }: { dd: number }) {
//   return (
//     <div>
//       <h2>I love {dd}</h2>
//     </div>
//   );
// }
