import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

export const LoadingSpinner = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #ada0a0;
  border-radius: 50%;
  border-top-color: #0052ff;
  animation: ${spinner} 0.6s linear infinite;
  ${({ lg }) => lg && `width: 64px; height: 64px; border-width: 4px;`}
`;
