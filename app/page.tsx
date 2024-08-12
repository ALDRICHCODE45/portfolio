import Approach from "@/components/approach/Approach";
import Footer from "@/components/fotter/Fotter";
import { Grid } from "@/components/grid/Grid";
import { Hero } from "@/components/hero/Hero";
import RecentProjects from "@/components/recent-projects/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
