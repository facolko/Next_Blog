import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  background: #fefefe;
  padding: 17px 0;
`;

const NavbarItem = styled.div`
  position: relative;
`;

const Logo = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #00008b;
`;

const AddPostBTN = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  background: #4169e1;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  position: absolute;
  width: 139px;
  height: 25px;
  left: 50%;
  top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 1);
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <div className="container">
        <NavbarItem>
          <Link href="/">
            <Logo>ANNA FACOLKO | NEXT</Logo>
          </Link>
          <Link href="addpost">
            <AddPostBTN>Добавить статью</AddPostBTN>
          </Link>
        </NavbarItem>
      </div>
    </Nav>
  );
}
