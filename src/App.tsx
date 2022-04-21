import React, { useState, useCallback, useEffect } from "react";

import Loading from "./components/Loading";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

import { Thought } from "./model/Thought";

import { API_URL, LIKE_URL } from "./utils/urls";

const App = (): JSX.Element => {
  const [post, setPost] = useState<Thought[]>([]);
  const [newUser, setNewUser] = useState<string>("");
  const [newPost, setNewPost] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number | string>(5);

  const fetchPosts = useCallback((): void => {
    setLoading(true);
    fetch(`${API_URL}?page=${page}&perPage=${perPage}`)
      .then((res) => res.json())
      .then((data) => setPost(data.message))
      .finally(() => setLoading(false));
  }, [page, perPage]);

  useEffect((): void => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSubmitForm = (event: React.FormEvent): void => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newPost,
        user: newUser,
      }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          alert("Message must be between 5 and 140 characters long");
        } else fetchPosts();
      })
      .catch((err) => console.error(err));

    setNewPost("");
    setNewUser("");
  };

  const handleSendLike = (postId: string): void => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKE_URL(postId), options)
      .then((res) => res.json())
      .then(() => {
        fetchPosts();
      });
  };

  return (
    <>
      {loading && <Loading />}
      <NewPost
        newUser={newUser}
        newPost={newPost}
        setNewPost={setNewPost}
        setNewUser={setNewUser}
        onSubmitForm={handleSubmitForm}
      />
      <Pagination
        perPage={perPage}
        page={page}
        setPerPage={setPerPage}
        setPage={setPage}
      />
      {post.map(
        (thought: Thought): JSX.Element => (
          <Posts
            key={thought._id}
            thought={thought}
            onSendLike={handleSendLike}
          />
        )
      )}
    </>
  );
};

export default App;
