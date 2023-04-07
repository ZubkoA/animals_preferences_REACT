import { useEffect, useState } from "react";
import { Carousel as RRCarousel } from "react-responsive-carousel";
import {
  CAT_URLS,
  DOG_URLS,
  INITIAL_PREF_STATE,
  PREFERENCES,
} from "../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carousel = () => {
  const [pref, setPref] = useState(INITIAL_PREF_STATE);

  useEffect(() => {
    localStorage.setItem("pref_animal", String(pref));
  }, [pref]);

  return (
    <>
      <div style={{ marginRight: "50px" }}>
        <div style={{ marginBottom: "10px" }}>U pref a {pref}</div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setPref(PREFERENCES.DOG)}
        >
          DOG
        </button>
        <button onClick={() => setPref(PREFERENCES.CAT)}>CAT</button>
      </div>
      <RRCarousel showIndicators={false} width={800} showArrows dynamicHeight>
        {pref === PREFERENCES.DOG
          ? DOG_URLS.map((url, index) => (
              <Slide key={index} imgSrc={url} pref={pref} />
            ))
          : CAT_URLS.map((url, index) => (
              <Slide key={index} imgSrc={url} pref={pref} />
            ))}
      </RRCarousel>
    </>
  );
};

const Slide = ({ pref, imgSrc }) => (
  <div
    style={{
      height: "300px",
      width: "800px",
    }}
  >
    <img src={imgSrc} alt={pref} />
  </div>
);
