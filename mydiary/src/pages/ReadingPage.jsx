import React, { useContext } from "react";
import styled from "styled-components";
import { PostContext } from "../context/ContextFile";

const ReadingPage = () => {
  const {posts}=useContext(PostContext);

  return (
    <Container>
      <Title>📖 저장된 글</Title>
      {Object.keys(posts).map((key) => (
      <PostCard key={key}>
        <PostTitle>{posts[key].title}</PostTitle>
        <PostContent>{posts[key].content}</PostContent>
      </PostCard>
      ))}
    </Container>
  );
};

export default ReadingPage;

const Container = styled.div`
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const PostCard = styled.div`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const PostContent = styled.p`
  color: #4a4a4a;
`;
