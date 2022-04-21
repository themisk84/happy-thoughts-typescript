import React from "react";
import styled from "styled-components";

import { Hearts, GlobalContainer } from "./GlobalStyledComponents";

const Header = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 30px;
  padding: 10px;
  box-shadow: 5px 5px black;
  background: #f2f2f2;
`;

const LabelStatus = styled.label`
  padding-bottom: 10px;
`;

const TextArea = styled.textarea`
  resize: none;
  font-size: 16px;
  font-family: "Oxygen", sans-serif;
`;

const UserId = styled.textarea`
  margin-top: 5px;
  height: 20px;
  width: 45%;
  border: 1px solid black;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  width: 60%;
  height: 30px;
  background-color: #ffb3b3;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 225px;
  }
`;

const CharactersLeft = styled.div`
  margin-top: 15px;
`;

interface NewPostProps {
  newPost: string;
  newUser: string;
  setNewPost: React.Dispatch<React.SetStateAction<string>>;
  setNewUser: React.Dispatch<React.SetStateAction<string>>;
  onSubmitForm: (event: React.FormEvent) => void;
}

const NewPost = ({
  newPost,
  newUser,
  setNewPost,
  setNewUser,
  onSubmitForm,
}: NewPostProps): JSX.Element => {
  const characters: number = newPost.length;
  return (
    <>
      <Header>The Happybook</Header>
      <Form onSubmit={onSubmitForm}>
        <LabelStatus htmlFor="thought">
          What's making you happy right now?
        </LabelStatus>
        <TextArea
          cols={35}
          rows={4}
          id="thought"
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        />
        <label htmlFor="user" className="user">
          <UserId
            cols={35}
            rows={1}
            id="user"
            value={newUser}
            onChange={(event) => setNewUser(event.target.value)}
            placeholder="Post as..."
          />
        </label>

        <GlobalContainer>
          <SubmitButton type="submit">
            <Hearts>&hearts;</Hearts>
            Send Happy Thought
            <Hearts>&hearts;</Hearts>
          </SubmitButton>
          <CharactersLeft style={characters > 140 ? { color: "red" } : {}}>
            {characters}/140
          </CharactersLeft>
        </GlobalContainer>
      </Form>
    </>
  );
};

export default NewPost;
