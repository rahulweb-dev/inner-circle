import Image from 'next/image';
import Hero from './components/Hero';
import RoomsSection from './components/RoomsSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import InstagramPost from './components/InstagramPost';
import Footer from './components/Footer';
import ImageGallery from './(pages)/gallery/Gallery';

export default function Home() {
  return (
    <>
      <Hero />
      <RoomsSection />
      <AboutSection />
      <ImageGallery />
      <InstagramPost />
      <TestimonialSection />
    </>
  );
}
