import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/NavBar/Navbar';
import Link from 'next/link';

const Wrapper = styled.div`
  background: #eef5ff;
  min-height: 100vh;
  width: 100%;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`;

const Post = styled.a`
  width: 350px;
  height: 270px;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  background: url('${(props) => props.bgImage}') center / cover no-repeat;
  :hover {
    transform: scale(1.1);
    transition: 0.3s all ease;
  }
`;

const PostTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3260a1;
  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: 0px 0px 15px 15px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <Wrapper>
        <div className="container">
          <PostsWrapper>
            <Link href={'/post/1'} as={'/post/1'}>
              <Post bgImage={'./image/1.jpeg'}>
                <PostTitle>Оптимизация изображения</PostTitle>
              </Post>
            </Link>
            <Link href={'/post/2'} as={'/post/2'}>
              <Post bgImage={'./image/5.jpeg'}>
                <PostTitle>Интернационализация</PostTitle>
              </Post>
            </Link>
            <Link href={'/post/3'} as={'/post/3'}>
              <Post bgImage={'./image/3.png'}>
                <PostTitle>Гибрид: SSG и SSR</PostTitle>
              </Post>
            </Link>
            <Link href={'/post/4'} as={'/post/4'}>
              <Post bgImage={'./image/4.jpeg'}>
                <PostTitle>API-маршруты</PostTitle>
              </Post>
            </Link>
            <Link href={'/post/5'} as={'/post/5'}>
              <Post bgImage={'./image/2.jpeg'}>
                <PostTitle>Next.js Аналитика</PostTitle>
              </Post>
            </Link>
            <Link href={'/post/6'} as={'/post/6'}>
              <Post bgImage={'./image/6.jpeg'}>
                <PostTitle>Встроенная поддержка CSS</PostTitle>
              </Post>
            </Link>
          </PostsWrapper>
        </div>
      </Wrapper>
    </div>
  );
}
