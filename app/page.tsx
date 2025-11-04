import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Introduction from "@/components/main/Introduction";
import RecentProjects from "@/components/main/RecentProjects";
import SocialLinks from "@/components/main/SocialLinks";
import TechStacks from "@/components/main/TechStacks";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <section className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[65%]">
          <Introduction/>
        </div>
        <div className="md:w-[35%]">
          <SocialLinks/>
        </div>
      </section>

      <section>
        <About/>
      </section>

      <section className="flex flex-col lg:flex-row lg:items-stretch gap-4">
        <div className="lg:w-[65%] flex flex-col">
          <Experience/>
        </div>
        <div className="lg:w-[35%] flex flex-col gap-4">
          <div className="flex-1">
            <RecentProjects/> 
          </div>
          <div className="flex-1">
            <TechStacks/>
          </div>
        </div>
      </section>
    </section>
  );
}
