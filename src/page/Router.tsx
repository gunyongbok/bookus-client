import { Route, Routes } from "react-router-dom";

// Root
import RootPage from "./Login/RootPage";

// Login
import Login from "./Login/Login";
import Withdraw from "./Profile/Withdraw";

// NotFound
import NotFound from "./NotFound";

// Before_Service
import ServiceAgree from "./Login/ServiceAgree";
import ServiceName from "./Login/ServiceName";
import Kakao from "./Login/Kakao";
import ServiceInterest from "./Login/ServiceInterest";

// MainPage
import Main from "./Main/Main";

// Search
import BookSearch from "./Search/BookSearch";

// Book
import BookInfo from "./Book/BookInfo";
import Library from "./Book/Library";
import BookDetail from "./Book/BookDetail";

// Report
import BookReport from "./Book/BookReport";
import BookReportView from "./Book/BookReportView";
import BookReportEdit from "./Book/BookReportEdit";

// Profile
import ProfileMain from "./Profile/ProfileMain";
import AccountManagement from "./Profile/AccountManagement";
import NotificationSetting from "./Profile/NotificationSetting";
import Announcement from "./Profile/Announcement";
import CustomerServiceCenter from "./Profile/CustomerServiceCenter";
import TermsOfConditions from "./Profile/TermsOfConditions";
import Logout from "./Profile/Logout";
import LoginRequired from "./Login/LoginRequired";

interface RouterProps {
  isTokenValid: boolean;
}

const Router: React.FC<RouterProps> = ({ isTokenValid }) => {
  return (
    <>
      <Routes>
        {isTokenValid ? (
          <>
            <Route path="/" element={<RootPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login />} />
            <Route path="service/agree" element={<ServiceAgree />} />
            <Route path="service/nickname" element={<ServiceName />} />
            <Route path="kakao" element={<Kakao />} />
            <Route path="main" element={<Main />} />
            <Route path="service/interest" element={<ServiceInterest />} />
            <Route path="search" element={<BookSearch />} />
            <Route path="bookinfo" element={<BookInfo />} />
            <Route path="library" element={<Library />} />
            <Route path="bookdetail/:libraryId" element={<BookDetail />} />
            <Route path="bookreport/:libraryId" element={<BookReport />} />
            <Route
              path="bookreportview/:reportId"
              element={<BookReportView />}
            />
            <Route
              path="bookreportedit/:reportId"
              element={<BookReportEdit />}
            />
            <Route path="profile" element={<ProfileMain />} />
            <Route
              path="profile/account-management"
              element={<AccountManagement />}
            />
            <Route
              path="profile/notification-setting"
              element={<NotificationSetting />}
            />
            <Route path="profile/announcement" element={<Announcement />} />
            <Route
              path="profile/customer-service-center"
              element={<CustomerServiceCenter />}
            />
            <Route
              path="profile/terms-of-conditions"
              element={<TermsOfConditions />}
            />
            <Route path="profile/logout" element={<Logout />} />
            <Route path="profile/withdraw" element={<Withdraw />} />
          </>
        ) : (
          <>
            <Route path="/" element={<RootPage />} />
            <Route path="*" element={<LoginRequired />} />
            <Route path="login" element={<Login />} />
            <Route path="service/agree" element={<ServiceAgree />} />
            <Route path="service/nickname" element={<ServiceName />} />
            <Route path="kakao" element={<Kakao />} />
            <Route path="main" element={<Main />} />
            <Route path="service/interest" element={<ServiceInterest />} />
            <Route path="search" element={<BookSearch />} />
            <Route path="bookinfo" element={<BookInfo />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Router;
