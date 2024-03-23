import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import LoginPassword from './Pages/loginPassword/LoginPassword';
import Nav from './components/nav/Nav';
import { LiveTV } from './components/livetv/LiveTV';
import MobileNavbar from './components/nav/MobileNavbar';
import Categories from './Pages/categories/Categories';
import ActionAndAdventureMain from './Pages/actionAndAdvendure/actionandadventuremain/ActionAndAdventureMain';
import MysteryThrillerMain from './components/mysteryThrillerMain/MysteryThrillerMain.jsx';
import ComedyMains from './components/All category/Comedy/ComedyMain.jsx';
import DocumentaryMain from './components/All category/DocumentaryMain/DocumentaryMain.jsx';
import DramaMain from './components/All category/Drama/DramaMain.jsx';
import FantasyMain from './components/All category/fantasy/FantasyMain.jsx';
import HorrorMain from './components/All category/Horror/HorrorMain.jsx';
import RomanceMain from './components/All category/RomanceMain/RomanceMain.jsx';
import SciFiMain from './components/All category/SciFi/SciFiMain.jsx';
import LanguageMoviesAndShows from './components/LanguageMoviesAndShows/LanguageMoviesAndShows.jsx';
import Search from './components/search/Search.jsx';
import AllTVShows from './components/AllTvShows/AllTVShows.jsx';
import Home_Corousel from './Pages/Movies/Home_Corousel.jsx';
import ComingSoon from './components/CommingSoon.jsx';
import MobileAddToWatchList from './components/WatchList/MobileAddToWatchList.jsx';
import AddToWatchList from './components/WatchList/AddToWatchList.jsx';
import Footer from './components/footer/Footer.jsx';
import { VideoPlayer } from './components/PlayShow/VideoPlayer.jsx';
import WatcDetailsMobile from './components/WatchDetails/WatcDetailsMobile.jsx';
import WatchDetails from "./components/WatchDetails/WatchDetails.jsx"
import ProtectedRoutes from './ProtectedRoutes.jsx';
import Profiles from './components/Profiles/Profiles.jsx';
import KidsAll from "./components/Kids/KidsAll.jsx"
import Subscription from './components/Subscription/Subscription.jsx';
import CreateNewPassword from './components/CreateNewPassword/CreateNewPassword.jsx';



function App() {
  const [isMobile, setIsMobile] = useState(false);
  const isVideoPlayerPage = window.location.pathname.includes("/TVShow");
  const [isLoginOrRegisterPage, setIsLoginOrRegisterPage] = useState(false);
 

  useEffect(() => {
    const pathname = window.location.pathname;
    setIsLoginOrRegisterPage(pathname === "/login" || pathname === "/register");
  }, [window.location.pathname]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <BrowserRouter>

        {isMobile ? <MobileNavbar /> : <Nav></Nav>}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path="/loginpassword" element={<LoginPassword></LoginPassword>} />
          <Route path="/Live TV" element={<LiveTV />} />
          <Route path="/Home/UserMoods" element={<ComingSoon />} />
          <Route path="/Home/KidsAll" element={<KidsAll />} />
          
          <Route path="/Categories" element={<Categories />} />

          <Route path="/Categories/ActionAdventure/:subheading" element={<ActionAndAdventureMain />} />
          <Route path="/Categories/MysteryAndThriller/:subheading" element={<MysteryThrillerMain />} />
          <Route path="/Categories/Comedy/:subheading" element={<ComedyMains />} />
          <Route path="/Categories/Documentary/:subheading" element={<DocumentaryMain />} />
          <Route path="/Categories/Drama/:subheading" element={<DramaMain />} />
          <Route path="/Categories/Fantasy/:subheading" element={<FantasyMain />} />
          <Route path="/Categories/Horror/:subheading" element={<HorrorMain />} />
          <Route path="/Categories/Romance/:subheading" element={<RomanceMain />} />
          <Route path="/Categories/SciFi/:subheading" element={<SciFiMain />} />

          <Route path="/WatchInYourLanguage/:language" element={<LanguageMoviesAndShows />}/>
          <Route path="/Search/:phrase" element={<Search />} />
          <Route path="/Home/AllTVShows" element={<AllTVShows />} />
          <Route path="/Home/AllMovies" element={<Home_Corousel />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
          <Route path="/manageprofiles" element={<Profiles />} />
          <Route path="/TVShow/:id" element={<ProtectedRoutes><VideoPlayer /></ProtectedRoutes>} /> 
          <Route path="/watchDetailsMob/:id" element={<WatcDetailsMobile />}/>
          <Route path="/watchDetails/:id" element={<WatchDetails />} />
          <Route path="/myStuff/MobWatchlist" element={<MobileAddToWatchList />}/>
          <Route path="/myStuff/Watchlist" element={<AddToWatchList />} />
          <Route path="/Subscription" element={<Subscription />}/>
          <Route path="/createNewPassword" element={<CreateNewPassword />} />

        </Routes>

      </BrowserRouter>




      {!isVideoPlayerPage && <Footer />}
    </>
  )
}

export default App
