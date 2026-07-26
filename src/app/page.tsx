import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import ServiceDetails from '@/components/sections/ServiceDetails';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <ServiceDetails></ServiceDetails>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}