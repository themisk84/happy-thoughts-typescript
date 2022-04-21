import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";

import { Hearts, GlobalContainer } from "./GlobalStyledComponents";
import { Thought } from "../model/Thought";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 30px;
  padding: 10px;
  box-shadow: 5px 5px black;
  background: #fff;
`;

const Message = styled.p`
  font-size: 18px;
`;

const HeartsCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeButton = styled.button`
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

interface PostsProp {
  thought: Thought;
  onSendLike: (id: string) => void;
}

const Posts = ({ thought, onSendLike }: PostsProp): JSX.Element => {
  const [color, setColor] = useState<string>("#f2f2f2");

  const clickLike = (id: string): void => {
    setColor("#ffb3b3");
    onSendLike(id);
  };

  return (
    <Container>
      <Message>{thought.message}</Message>
      <Message>{thought.user}</Message>
      <GlobalContainer>
        <HeartsCounter>
          <LikeButton
            style={{ background: color }}
            onClick={() => {
              clickLike(thought._id);
            }}
          >
            <Hearts>&hearts;</Hearts>
          </LikeButton>
          x {thought.hearts}
        </HeartsCounter>
        <div> {moment(thought.createdAt).fromNow()}</div>
      </GlobalContainer>
    </Container>
  );
};

export default Posts;
