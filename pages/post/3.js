import styled from 'styled-components';
import Head from 'next/dist/shared/lib/head';
import Navbar from '../../components/NavBar/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`
  background: #eef5ff;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 100px;
`;

const BackBtn = styled.a`
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3260a1;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
  outline: none;
  width: 117px;
  height: 45px;
  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 1);
  }
`;

const PostWrapper = styled.div`
  background: #fefefe;
  border-radius: 15px;
  display: flex;
  margin-top: 50px;
  position: relative;
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
  padding: 35px;
`;

const PostTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 25px  
  color: #3260a1;
`;

const PostText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export default function Post() {
  return (
    <Wrapper>
      <Head>
        <title>ANNA FACOLKO | Пост</title>
      </Head>
      <Navbar />
      <div className="container">
        <Link href="/">
          <BackBtn>⟸ Назад</BackBtn>
        </Link>

        <PostWrapper>
          <PostItem>
            <PostTitle>Получение данных</PostTitle>
            <PostText>
              Если вы экспортируете async функцию, вызываемую getStaticPropsсо
              страницы, Next.js будет предварительно визуализировать эту
              страницу во время сборки, используя реквизиты, возвращаемые
              getStaticProps.Примечание : вы не должны использовать fetch()для
              вызова маршрута API в getStaticProps. Вместо этого напрямую
              импортируйте логику, используемую в вашем маршруте API. Для этого
              подхода вам может потребоваться небольшой рефакторинг вашего кода.
              Получение из внешнего API - это нормально! Примечание : вы можете
              импортировать модули в области верхнего уровня для использования в
              getStaticProps. Импорты, используемые в getStaticProps, не будут
              объединены для клиентской стороны . Это означает, что вы можете
              писать код на стороне сервера прямо вgetStaticProps . Это включает
              чтение из файловой системы или базы данных.
            </PostText>
          </PostItem>
          <PostItem>
            <PostTitle>
              <Image
                src="/image/3.png"
                alt="Picture of the author"
                width={540}
                height={316}
              />
            </PostTitle>
          </PostItem>
        </PostWrapper>
      </div>
    </Wrapper>
  );
}
