import type { CSSProperties } from "react";

export default function GoTop() {
  return (
    <>
      <button id="goTop" className="show">
              <span className="border-progress" style={{ "--progress-angle": "360deg" } as CSSProperties}></span>
              <span className="ic-wrap">
              <span className="icon icon-long-arrow-alt-up-solid"><i className="fa-sharp fa-regular fa-arrow-up-long"></i></span>
              </span>
          </button>
    </>
  );
}
