import styled from 'styled-components';
import Head from 'next/dist/shared/lib/head';
import Navbar from '../components/NavBar/Navbar';
import Link from 'next/link';

const Wrapper = styled.div`
  background: #eef5ff;
  min-height: 100vh;
  width: 100%;
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

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
`;

const TextArea = styled.textarea`
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  min-height: 150px;
  resize: none;
  outline: none;
  padding: 5px 10px;
  margin-bottom: 5px;
`;

const Btn = styled.button`
  background: #67bfff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  width: 139px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin: 0 auto;
  margin-top: 15px;
  cursor: pointer;
`;

export default function AddPost() {
  return (
    <Wrapper>
      <Head>
        <title>ANNA FACOLKO | Добавить пост</title>
      </Head>
      <Navbar />
      <div className="container">
        <Link href="/">
          <BackBtn>⟸ Назад</BackBtn>
        </Link>
      </div>
      <FormWrapper>
        <Form>
          <InputField>
            <TextLabel>Название статьи</TextLabel>
            <Input />
          </InputField>
          <InputField>
            <TextLabel>Текст статьи</TextLabel>
            <TextArea />
          </InputField>
          <InputField>
            <TextLabel>URL картинки</TextLabel>
            <Input />
          </InputField>
          <Btn>Добавить</Btn>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}
