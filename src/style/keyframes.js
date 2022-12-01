import { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: translate(-20px, 0);
}
100% {
    opacity: 1;
    transform: translate(0px, 0px);
}
`;

export const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
100% {
    transform: translate(-20px, 0);
    opacity: 0;
  }
`;