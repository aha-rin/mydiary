import React, { createContext, useState,useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // 데이터를 가져오는 함수
  const fetchPosts = async () => {
    
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postList);
      console.log("postList:",postList);

    } catch (error) {
      console.error("Error fetching posts: ", error);
      alert("데이터를 가져오는 중에 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };
  
  // 최초 렌더링 시 데이터 받아오기
  useEffect(() => {
    fetchPosts(); 
    console.log("posts:",posts);
  }, []);

  return (
    <PostContext.Provider value={{ posts,fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};
