import BestBusiness from "@/components/sections/BestBusiness";
import ChoseYourCard from "@/components/sections/ChoseYourCard";
import ControlBilling from "@/components/sections/ControlBilling";
import CounterData from "@/components/sections/CounterData";
import Hero from "@/components/sections/Hero";
import PaymentsMethods from "@/components/sections/PaymentsMethods";
import Testimonials from "@/components/sections/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <CounterData />
      <BestBusiness />
      <ChoseYourCard />
      <ControlBilling />
      <Testimonials />
      <PaymentsMethods />
    </>
  );
}
