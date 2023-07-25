import ChevronDown from '@/components/ChevronDown';
import Navbar from '@/components/Navbar';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden p-0 m-0">
        <div className="h-screen w-screen bg-[url('../assets/111.jpg')] bg-cover bg-center snap-start snap-always">
          <div className="h-screen w-screen bg-mejbaan bg-opacity-80 flex flex-col justify-center relative">
            <div className="relative">
              <h2 className="text-4xl text-center flex flex-col font-light">
                <span className="">LET&apos;S FIGHT</span>
                <span className="typo1 text-yellow-300 block p-5 pb-7 text-8xl leading-snug">
                  hunger
                </span>
                <span>TOGETHER</span>
              </h2>
            </div>
            <div className="absolute bottom-[90px] left-[50vw] md:left-[49vw] animate-bounce h-10 text-2xl">
              <ChevronDown />
            </div>
          </div>
        </div>
        <div className="h-screen w-screen bg-[url('../assets/222.jpg')] bg-cover bg-center snap-start snap-always">
          <div className="h-screen w-screen bg-mejbaan bg-opacity-80 flex flex-col justify-center">
            <h2 className="text-4xl text-center flex flex-col pb-1 font-light">
              <span className="p-2 pb-8">MORE THAN</span>
              <span className="text-yellow-300 text-[100px] typo1 p-2 leading-tight">
                <sup>1</sup>&frasl;<sub>3</sub>
              </span>
              <span className="p-2 pt-0">OF ALL FOOD IS BEING WASTED</span>
            </h2>
            <div className="">
              <h3 className="text-xl font-light p-2 pt-4 text-center">
                We waste 2.5 billion tonnes of food annually, whilst 828 million
                people go hungry every day!
              </h3>
            </div>
          </div>
        </div>
        <div className="h-screen w-screen bg-[url('../assets/333.jpg')] bg-cover bg-center snap-start snap-always">
          <div className="h-screen w-screen bg-mejbaan bg-opacity-90 flex flex-col justify-center">
            <div>
              <h3 className="text-4xl text-center flex flex-col drop-shadow-2xl shadow-black">
                <span className="font-light">Let&apos;s</span>
                <span className="typo1 text-8xl p-4 text-yellow-300 leading-snug">
                  share
                </span>
                <span className="font-light">
                  our surplus food with those in need!
                </span>
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
