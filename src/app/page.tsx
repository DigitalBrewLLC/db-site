import Footer from "@/components/Layout/Footer";
import HomeCTA from "@/components/Layout/HomeCTA";
import Nav from "@/components/Layout/Nav";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen text-text bg-background">
        <HomeCTA />
      </div>
    </div>
  );
};

export default Home;
