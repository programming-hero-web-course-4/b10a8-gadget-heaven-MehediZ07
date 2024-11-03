import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
export default function Root() {
  return (
    <div>
      <div className="-ml-10 lg:-ml-8 xl:ml-10">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
