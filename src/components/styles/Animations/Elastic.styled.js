import { keyframes } from 'styled-components';

const totalWidth = 263;
const side = 0.4 * totalWidth;

export const left = keyframes`
  0% {
    right: 0;
    width: ${side}px;
  }
  25% {
    right: 0;
    width: 100%;
  }
  50% {
    left: 0;
    width: 100%;
    right: auto;
  }
  100% {
    left: 0;
    width: ${side}px;
  }
 `;

export const right = keyframes`
    0% {
      left: 0;
      width: ${side}px;
    }
    25% {
      left: 0;
      width: 100%;
    }
    50% {
      right: 0;
      width: 100%;
      left: auto;
    }
    100% {
      right: 0px;
      width: ${side}px;
    }
`;
