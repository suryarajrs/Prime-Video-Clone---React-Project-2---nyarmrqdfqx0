import { IoIosArrowDown } from "react-icons/io";
import "./home.css";
import { useEffect, useState } from "react";
import { Link,  useNavigate,  } from "react-router-dom";
import HomeTabDropdown from "./HomeTabDropdown/HomeTabDropdown";
import { BsSearch } from "react-icons/bs";
import CategoriesDropDown from "./categoriesDropDown/CategoriesDropDown";
import MyStuffTabDropdown from "./MyStuffTabDropDown";
import AvatarSignINDropdown from "./AvatarSignINDropdown";
import StoreTabDropdown from "./storedropdown/StoreTabDropdown.jsx"




const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHomeHover, setIsHomeHover] = useState(false);
  const [isStoreHover, setStoreIsHover] = useState(false);
  const [isCategoriesHover, setCaregoriesIsHover] = useState(false);
  const [isMyStuffHover, setMyStuffIsHover] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const [isProfileUserName, setIsProfileUserName] = useState("");

  const [profileImg, setprofileImg] = useState(() => {
    const profileImage = localStorage.getItem("profileImage");
    return profileImage ? profileImage : "/avatar.png";
  });

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
      const userName = localStorage.getItem("loginUserName");
      setIsProfileUserName(userName);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const handleProfileImgSTorageChange = (e) => {
      const profileImage = localStorage.getItem("profileImage");
      if (profileImage) {
        setprofileImg(profileImage);
      }
    };

    window.addEventListener("storage", handleProfileImgSTorageChange);

    return () => {
      window.removeEventListener("storage", handleProfileImgSTorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("bearer_token");
    localStorage.removeItem("loginUserName");
    window.location.reload();
  };


  const navigate = useNavigate();

  const handleSetActivePage = (page) => {
    setActivePage(page);
    setIsHover(!isHover);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchValue = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchText)}`);
  };

  return (
    <>
      <div className="navigator-container">
        <div className="navbar-navs">
          <div className="prime-img">
            <Link to={"/Home"}>
              <img src="/primeVideo.PNG" alt="prime video" />
            </Link>
          </div>
          <div className="main-links">
            <ol className="home-navs">
              <div className="home-navs-all" style={{ display: "flex" }}>
                <li
                  onMouseEnter={() => { handleSetActivePage("Home"), setIsHomeHover(!isHomeHover) }}
                  onMouseLeave={() => { handleSetActivePage(null), setIsHomeHover(!isHomeHover) }}
                  className={`home-list ${activePage === "Home" && isHover ? "active-page" : ""
                    }`}
                >
                  <HomeTabDropdown isHover={isHomeHover} />
                </li>
                <li
                  onMouseEnter={() => { handleSetActivePage("Home"), setStoreIsHover(!isStoreHover) }}
                  onMouseLeave={() => { handleSetActivePage(null), setStoreIsHover(!isStoreHover) }}
                  className={`home-list ${activePage === "Home" && isHover ? "active-page" : ""
                    }`}
                >
                  <StoreTabDropdown isHover={isStoreHover}></StoreTabDropdown>
                </li>
              </div>

              <li
                onMouseEnter={() => handleSetActivePage("Live TV")}
                onMouseLeave={() => handleSetActivePage(null)}
                className='lived-tv'
              >
                <Link to={"/Live TV"} className="live-tv">
                  Live TV
                </Link>
              </li>

              <li
                onMouseEnter={() => { handleSetActivePage("Categories"), setCaregoriesIsHover(!isCategoriesHover) }}
                onMouseLeave={() => { handleSetActivePage(null), setCaregoriesIsHover(!isCategoriesHover) }}
                onClick={() => setActivePage("Categories")}
                className={`home-list ${activePage === "Categories" && isHover ? "active-page" : ""
                  }`}
              >
                <Link to={"/Categories"} className="categories">
                  Categories <IoIosArrowDown />
                </Link>

                {activePage === "Categories" && <CategoriesDropDown isHover={isCategoriesHover}></CategoriesDropDown>}
              </li>

              {isloggedIn && (
                <li
                  onMouseEnter={() => { handleSetActivePage("My Stuff"), setMyStuffIsHover(!isMyStuffHover) }}
                  onMouseLeave={() => { handleSetActivePage(null), setMyStuffIsHover(!isMyStuffHover) }}
                  className={`home-list ${activePage === "My Stuff" && isHover ? "active-page" : ""
                    }`}
                >
                  <MyStuffTabDropdown isHover={isMyStuffHover} />
                </li>
              )}
            </ol>
          </div>

          <div className="search_name">
            <div className="search-btn">
              <button style={{ border: "none" }} onClick={toggleSearch}>
                <BsSearch className="search-icon" />
              </button>

              <div
                className={`options-search search-dropdown`}
                style={
                  isSearchVisible ? { display: "block" } : { display: "none" }
                }
              >
                <div>
                  <form onSubmit={handleSearchSubmit}>
                    <span>
                      <input
                        className="input-search search-input"
                        type="search"
                        name="phrase"
                        spellCheck="false"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        placeholder="Search"
                        onChange={handleSearchValue}
                        value={searchText}
                      />
                    </span>
                    <button type="submit" style={{ display: "none" }}></button>
                  </form>
                </div>
              </div>
            </div>
            {isAuthenticated || <div style={{ marginBottom: '15px' }} className="user-name">
              {isProfileUserName || "Try for free"}
            </div>}

            <div className="user-avatar ">

              {isAuthenticated && <div className="user-name">
                {isProfileUserName || "Try for free"}
              </div>}
              <li
                style={{
                  listStyle: "none",
                  objectFit: "cover",
                  cursor: "pointer",
                  padding: '12px 15px 12px 15px'
                }}
              >
                {isAuthenticated ? (
                  <>
                    <img
                      src={profileImg}
                      alt="avatar"
                      height={35}
                      width={35}
                      style={{ borderRadius: "50%" }}
                      onMouseEnter={() => handleSetActivePage("Home")}
                      onMouseLeave={() => handleSetActivePage(null)}
                      className={`home-list nav-avatar ${activePage === "abcd" && isHover ? "active-page" : ""
                        }`}
                    />

                    <div className="options avatar-options">
                      <div className="options-left">
                        <span
                          className="optoins-login-headings"
                          style={{ color: "white" }}
                        >
                          Your Account
                        </span>

                        <span className="categories-link-text">
                          <Link
                            to={"/createNewPassword"}
                            style={{
                              listStyleType: "none",
                              textDecoration: "none",
                              color: "#aaa",
                            }}
                          >
                            Accounts and Settings
                          </Link>
                        </span>

                        <span className="categories-link-text">
                          <Link
                            to={"/Subscription"}
                            style={{
                              listStyleType: "none",
                              textDecoration: "none",
                              color: "#aaa",
                            }}
                          >
                            Prime Benefits
                          </Link>
                        </span>
                        <span className="categories-link-text">
                          <Link
                            to={"/"}
                            onClick={handleLogout}
                            style={{
                              listStyleType: "none",
                              textDecoration: "none",
                              color: "#aaa",
                            }}
                          >
                            Sign Out
                          </Link>
                        </span>
                      </div>
                      <div className="options-left">
                        <span
                          className="optoins-login-headings"
                          style={{ color: "white" }}
                        >
                          Profiles
                        </span>

                        <span className="categories-link-text">
                          <Link
                            to={"/Home/KidsAll"}
                            style={{
                              listStyleType: "none",
                              textDecoration: "none",
                              color: "#aaa",
                            }}
                          >
                            Kids
                          </Link>
                        </span>

                        <span className="categories-link-text">
                          <Link
                            to={"/manageprofiles"}
                            style={{
                              listStyleType: "none",
                              textDecoration: "none",
                              color: "#aaa",
                            }}
                          >
                            Manage Profiles
                          </Link>
                        </span>

                        <span className="categories-link-text">
                          <Link
                            to={"/Home/UserMoods"}
                            style={{
                              listStyleType: "none",
                              textDecoration: "none",
                              color: "#aaa",
                            }}
                          >
                            Manage Moods
                          </Link>
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <>

                      <AvatarSignINDropdown isHover={isHover} />
                    </>
                  </>
                )}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
