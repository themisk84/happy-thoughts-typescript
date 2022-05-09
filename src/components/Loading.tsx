import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  font-size: 18px;
  font-weight: bold;
`;

const LoadingContainer = styled.div`
  width: 200px;
  border: 3px solid black;
  border-radius: 10px;
`;

const loader = keyframes`
0% { width: 0%; }
10% { width: 10%;}
30% { width: 30%;}
50% { width: 50%; }
70% { width: 70%; }
100% { width: 90%; }
`;
const LoadingDiv = styled.div`
  margin: 3px;
  border-radius: 10px;
  height: 10px;
  width: 200px;
  background: blue;
  animation-name: ${loader};
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;
const Loading = (): JSX.Element => {
  return (
    <LoadingOverlay>
      Loading
      <LoadingContainer>
        <LoadingDiv />
      </LoadingContainer>
    </LoadingOverlay>
  );
};

export default Loading;
