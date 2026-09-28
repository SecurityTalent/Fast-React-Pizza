import { Outlet } from "react-router";
import { useNavigation } from "react-router";

import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {


  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
  // console.log(navigation)

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <h1 style={{ color: "red" }}>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;