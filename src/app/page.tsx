import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/sections/About';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Pricing from '@/sections/Pricing';
import Testimonials from '@/sections/Testimonials';
import Faq from '@/sections/Faq';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
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