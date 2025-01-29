import Carousel from "@/components/Carousel";
import Carousel2 from "@/components/Carousel2";
import Featured from "@/components/Featured";
import Fluid from "@/components/Fluid";
import Footer from "@/components/Footer1";
import NavbarDark from "@/components/NavbarDark";
import NavbarLight1 from "@/components/NavbarLight1";
import ProductCards from "@/components/ProductCards";
import ShopCards from "@/components/ShopCards";
import { auth } from "@/app/utils/auth";
import { signOutHome } from "./actions/signOutHome";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <NavbarDark />
      <NavbarLight1 session={session} signOutHome={signOutHome} />
      <Carousel />
      <ShopCards />
      <ProductCards />
      <Carousel2 />
      <Fluid />
      <Featured />
      <Footer />
    </>
  );
}
