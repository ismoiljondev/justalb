import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";
import Dedicated from "./components/Dedicated/index";
// import Digital from "./components/Digital/index";
// import Beliefs from "./components/Beliefs/index";
import Ourteam from "./components/Ourteam/index";
import Manage from "./components/Manage/index";
import FAQ from "./components/FAQ/index";
import Joinus from "./components/Joinus/index";
import Insta from "./components/Insta/index";
import { Teachers } from "./components/Wework";

export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      <Teachers />
      <Ourteam />
      <Manage />
      <FAQ />
      <Joinus />
      <Insta />
    </main>
  );
}
