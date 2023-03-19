/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { SetStateAction } from "react";
import { mqMore } from "@/styles/mediaQueries";

const togglerCss = css({
  position: "fixed",
  zIndex: 999,
  top: "1rem",
  right: "1rem",
  [mqMore("xl")]: {
    top: "2rem",
    right: "2rem",
  },
});

type TogglerProps = {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
};

export default function Toggler({
  isOpen,
  setIsOpen,
}: TogglerProps): JSX.Element {
  return (
    <span css={togglerCss} className="toggler" id="js-toggle-open">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            data-testid="toggler-close"
            className="toggler__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              id="Group_14"
              data-name="Group 14"
              transform="translate(-764 -31)"
            >
              <g
                id="Group_13"
                data-name="Group 13"
                transform="translate(74.5 -46.5)"
              >
                <g
                  id="Group_12"
                  data-name="Group 12"
                  transform="translate(693.5 81.5)"
                >
                  <line
                    id="Line_8"
                    data-name="Line 8"
                    x1="16.485"
                    y1="16"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_12"
                    data-name="Line 12"
                    x1="16.485"
                    y2="16"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </g>
              </g>
              <rect
                id="Rectangle_20"
                data-name="Rectangle 20"
                width="24"
                height="24"
                transform="translate(764 31)"
                fill="none"
              />
            </g>
          </svg>
        ) : (
          <svg
            data-testid="toggler-open"
            className="toggler__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              id="Group_15"
              data-name="Group 15"
              transform="translate(-786 -33)"
            >
              <g
                id="Group_11"
                data-name="Group 11"
                transform="translate(51.5 -48.5)"
              >
                <line
                  id="Line_9"
                  data-name="Line 9"
                  x2="24"
                  transform="translate(734.5 85.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x2="24"
                  transform="translate(734.5 93.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <line
                  id="Line_11"
                  data-name="Line 11"
                  x2="24"
                  transform="translate(734.5 101.5)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </g>
              <rect
                id="Rectangle_21"
                data-name="Rectangle 21"
                width="24"
                height="24"
                transform="translate(786 33)"
                fill="none"
              />
            </g>
          </svg>
        )}
      </button>
    </span>
  );
}
