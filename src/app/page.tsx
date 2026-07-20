import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}