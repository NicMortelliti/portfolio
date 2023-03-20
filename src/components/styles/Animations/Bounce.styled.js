import { keyframes } from "styled-components";

// Animation movement duration will be 20% of the total
// animation duration. Total animation duration is:
// Animation Movement Duration + Animation Static Duration
export const Bounce = keyframes`
  0%, /* Start animation ΔY=0 */
  4%, /* Object now begins animation (see 7%)*/
  10%,
  16%, /* Object returns to ΔY=0 between 16% and 100% of total animation duration */
  100% {
    transform: translateY(0);
  }
  7% { /* Translate object (n)px upwards */
      transform: translateY(-30px);
  }
  13% { /* Translate object (n)px upwards */
    transform: translateY(-15px);
  }
`;
