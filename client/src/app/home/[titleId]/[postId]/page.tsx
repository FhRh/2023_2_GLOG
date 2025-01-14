'use client';
import DragAndDrop from '@/components/DND/DragAndDrop';
import { Stack } from '@mui/material';
import React from 'react';
import {
  AuthorArea,
  PostAuthorProfileImage,
  PostRoute,
  PostTitle,
  ThumbnailArea,
  ViewPostArea,
} from './postId.style';

const page = ({ params }: { params: { titleId: string; postId: string } }) => {
  const writeList = [
    {
      postId: 0,
      postTitle: '제목입니다',
    },
    {
      postId: 1,
      postTitle: '프론트앤드',
    },
    {
      postId: 2,
      postTitle: '백앤드',
    },
  ];

  const backendInfo = [
    {
      PostDetailResponse: {
        author: {
          userId: 1,
          nickname: 'string',
          profileImage: 'string',
        },
        blogUrl: 'string',
        postId: 1,
        title: '제목입니다.',
        content: 'string',
        thumbnail: 'string',
        createdAt: 0,
        likesCount: 0,
        viewsCount: 0,
        repliesCount: 0,
        isPrivate: true,
        isScraped: false,
        isLiked: false,
        isAuthor: false,
        hastags: [],
      },
    },
  ];
  const result = backendInfo[0];

  return (
    <ViewPostArea>
      <ThumbnailArea>
        <Stack position={'absolute'}>
          <PostRoute>JunLog - {params.postId}</PostRoute>
          <PostTitle>{result.PostDetailResponse.title}</PostTitle>
          <AuthorArea>
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <PostAuthorProfileImage></PostAuthorProfileImage>
              <Stack>{result.PostDetailResponse.author.nickname}</Stack>
            </Stack>
          </AuthorArea>
        </Stack>
      </ThumbnailArea>
      <DragAndDrop
        footprintList={writeList}
        categoryNumber={params.postId}
        rightContainer={
          <Stack width={'100%'} height={'100%'} bgcolor="white">
            <Stack>{result.PostDetailResponse.content}</Stack>
          </Stack>
        }
      />

      {/* <Stack bgcolor="yellow" width="200px">
        ads
      </Stack> */}
    </ViewPostArea>
  );
};

export default page;
