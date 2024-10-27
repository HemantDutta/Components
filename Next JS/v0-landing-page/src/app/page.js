import Image from "next/image";
import Navbar from "@/app/Navbar";
import PricingSection from "@/app/Pricing";
import Footer from "@/app/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
          <Navbar/>
          <div className="py-12 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-yellow-400 text-lg font-semibold mb-2">Video Editing</h2>
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Amazingly Simple
                  </h1>
                  <p className="text-gray-300 text-lg mb-6">
                    We designed XORA Al Video Editor to be
                    an easy to use, quick to learn and
                    surprisingly powerful.
                  </p>
                  <button className="px-6 py-3 bg-blue-500 text-yellow-400 font-semibold rounded-lg shadow-neomorphic transition duration-300 hover:shadow-neomorphic-hover focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                    TRY IT NOW
                  </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src="/landing_3d_object.avif"
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PricingSection/>
          <Footer/>
        </div>
      </div>
    </>
  );
}
