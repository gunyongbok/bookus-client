import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// icons
import home1 from "../../assets/svg/library/IC_NAV_HOME.svg";
import home from "../../assets/svg/library/IC_NAV_HOME_Clicked.svg";
import search from "../../assets/svg/library/IC_NAV_SEARCH.svg";
import search1 from "../../assets/svg/library/IC_NAV_SEARCH_Clicked.svg";
import book from "../../assets/svg/library/IC_NAV_BOOK.svg";
import book1 from "../../assets/svg/library/IC_NAV_BOOK_Clicked.svg";
import social from "../../assets/svg/library/IC_NAV_SOCIAL.svg";
import social1 from "../../assets/svg/library/IC_NAV_SOCIAL_Clicked.svg";
import profile from "../../assets/svg/library/IC_NAV_USER.svg";
import profile1 from "../../assets/svg/library/IC_NAV_USER_Clicked.svg";

const NavBar = styled.div`
  width: 100%;
  height: 107px;
  background: #fcfcff;
  box-shadow: 0px -2px 10px 0px rgba(233, 246, 238, 0.5);
  position: absolute;
  bottom: 0;
  padding: 12px 23px 34px 23px;
  box-sizing: border-box;
  display: flex;
  gap: 36px;
`;

const Img = styled.img`
  width: 40px;
  height: 53px;
`;

const Icons = [
  [home1, home, "/main"],
  [book1, book, "/library"],
  [search1, search, "/search"],
  [social1, social, "/social"],
  [profile1, profile, "/profile"],
];

const Navbar = () => {
  const location = useLocation();

  return (
    <NavBar>
      {Icons.map(([normal, clicked, route], index) => (
        <Link to={route} key={index}>
          <Img src={location.pathname === route ? clicked : normal} alt="" />
        </Link>
      ))}
    </NavBar>
  );
};

export default Navbar;
