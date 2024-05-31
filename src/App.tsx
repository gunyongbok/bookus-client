import React, { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import Router from "./page/Router";
import { tokenValidityState } from "./recoil/atom";
import validateToken from "./Api/token/validateToken";
import { useLocation } from "react-router-dom";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
};

const AppContent: React.FC = () => {
  const [isTokenValid, setIsTokenValid] = useRecoilState(tokenValidityState);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const isValid = await validateToken();
      setIsTokenValid(isValid);
    };

    fetchData();
  }, [location.pathname]);

  return <Router isTokenValid={isTokenValid} />;
};

export default App;
