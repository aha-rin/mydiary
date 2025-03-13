import React, { useState,useContext } from "react";
import { db } from "../firebase.js";
import { collection, addDoc,Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostContext, PostProvider } from "../context/ContextFile";

const WritingPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {fetchPosts}=useContext(PostContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("제목과 내용을 입력하세요!");

    try{
      await addDoc(collection(db, "posts"), {
        title:title,
        content:content,
        createdAt: Timestamp.fromDate(new Date())
      });
      fetchPosts();
      console.log("alert이전");
      alert("글이 저장되었습니다!");
      console.log("alert이후");
      navigate("/read");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("글 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <PostProvider>
    <Container>
      <Title>✍️ 글 작성</Title>
      <Form>
        <Input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SubmitButton type="submit" onClick={handleSubmit}>저장하기</SubmitButton>
      </Form>
    </Container>
    </PostProvider>
  );
};

export default WritingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid #ddd;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  resize: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: skyblue;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color:white;
  }
`;