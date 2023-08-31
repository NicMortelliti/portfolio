import { keyframes } from 'styled-components';

const totalWidth = 263;
const side = 0.4 * totalWidth;

export const left = keyframes`
  0% {
    right: 0;
    width: ${side}px;
  }
  20% {
    right: 0;
    width: 100%;
  }
  50% {
    width: 100%;
    right: auto;
  }
  80% {
    left: 0;
    width: 100%;
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
     20% {
      left: 0;
      width: 100%;
    }
    50% {
      width: 100%;
    }
    80% {
      width: 100%;
      right: 0;
    } 
    100% {
      right: 0;
      width: ${side}px;
    }
`;
