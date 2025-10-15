import { BranchManagerSection } from "../Components/Contact/BranchManagerSection";
import { CustomerServiceSection } from "../Components/Contact/CustomerServicesSection";
import { FAQManagementSection } from "../Components/Contact/FAQManagementSection";
import { HeroSection } from "../Components/Contact/HeroSection";

export default function Contact() {
  return (
    <>
      <HeroSection />
      <CustomerServiceSection />
      <FAQManagementSection />
      <BranchManagerSection />
    </>
  );
}
