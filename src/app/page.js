import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import CommunityPower from '@/components/CommunityPower';
import ImportantSteps from '@/components/ImportantSteps';
import PeopleToKnow from '@/components/PeopleToKnow';
import Network from '@/components/Network';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <Popup />
      <Hero />
      <Mission />
      <CommunityPower />
      <ImportantSteps />
      <PeopleToKnow />
      <Network />
      <BackToTop />
      <Footer />
    </>
  );
}
