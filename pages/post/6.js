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
            <PostTitle>Встроенная поддержка CSS</PostTitle>
            <PostText>
              Next.js позволяет импортировать файлы CSS из файла JavaScript. Это
              возможно, потому что Next.js расширяет концепцию
              importJavaScript.Чтобы добавить таблицу стилей в приложение,
              импортируйте файл CSS в pages/_app.js. Например, рассмотрим
              следующую таблицу стилей с именем styles.css:Создайте
              pages/_app.jsфайл, если он еще не существует. Затем
              файл.importstyles.css.Эти стили ( styles.css) будут применяться ко
              всем страницам и компонентам вашего приложения. Из-за глобального
              характера таблиц стилей и во избежание конфликтов вы можете
              импортировать их только внутриpages/_app.js . В процессе
              разработки такое представление таблиц стилей позволяет загружать
              стили в горячем режиме по мере их редактирования, что означает,
              что вы можете сохранить состояние приложения. При производстве все
              файлы CSS будут автоматически объединены в один минифицированный
              .cssфайл.
            </PostText>
          </PostItem>
          <PostItem>
            <PostTitle>
              <Image
                src="/image/6.jpeg"
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
