import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>모드를 선택하세요</Title>
      <ButtonContainer>
        <ModeButton mode="read" onClick={() => navigate("/read")}>
          📖 <br /> 읽기 모드<br/><SubText>쓰기 모드에서 쓴 글을<br/> 확인할 수 있어요.</SubText>
        </ModeButton>
        <ModeButton mode="write" onClick={() => navigate("/write")}>
          ✍️ <br /> 쓰기 모드<br/><SubText>글을 쓸 수 있어요.</SubText>
        </ModeButton>
      </ButtonContainer>
    </Container>
  );
};

export default SelectPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SubText=styled.p`
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ModeButton = styled.button`
  width: 240px;
  height: 240px;
  background-color: none;
  color: black;
  font-size:2rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    background-color:skyblue;
    transform: scale(1.1);
  }
`;