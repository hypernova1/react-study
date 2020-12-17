import React, { useEffect, useState, useCallback } from 'react'
import { PostWrapper, Navigate, Post, Warning } from '../components';
import * as service from '../service/post';

// const fetchPostInfo = async (postId) => {
//   const post = await service.getPost(postId);
//   console.log(post);
//   const comments = await service.getComment(postId);
//   console.log(comments);
// }


const PostContainer = () => {
  const [post, setPost] = useState({
    title: null,
    body: null
  });
  const [postId, setPostId] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [comments, setComments] = useState([]);
  const [warningVisibility, setWarningVisibility] = useState(false);

  const fetchPostInfo = useCallback(async (postId) => {
    setPostId(postId);

    try {
      const info = await Promise.all([
        service.getPost(postId),
        service.getComment(postId)
      ])
      
      setFetching(true);
  
      const { title, body } = info[0].data;
      const comments = info[1].data;
  
      setPost({ title, body });
      setComments(comments);
    } catch(e) {
      setFetching(false);
      showWarning();
    }

    
  }, []);

  const handleNavigateClick = (type) => {
    if(type === 'NEXT') {
      fetchPostInfo(postId+1);
    } else {
      fetchPostInfo(postId - 1);
    }
  }

  const showWarning = () => {
    setWarningVisibility(true);

    setTimeout(() => {
      setWarningVisibility(false);
    }, 1500)
  }


  useEffect(() => {
    fetchPostInfo(1);
  }, [fetchPostInfo])

  return (
    <PostWrapper>
      <Navigate
        postId={postId}
        disabled={fetching}
        onClick={handleNavigateClick}
      />
      <Post
        title={post.title}
        body={post.body}
        comments={comments}
      />
      <Warning visible={warningVisibility} message="That post does not exist" />
    </PostWrapper>
  )
};

export default PostContainer;