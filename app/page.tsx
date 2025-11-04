import AnimatedCard from "@/components/AnimatedCard";
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
          <AnimatedCard delay={0.1}>
            <Introduction/>
          </AnimatedCard>
        </div>
        <div className="md:w-[35%]">
          <AnimatedCard delay={0.1}>
            <SocialLinks/>
          </AnimatedCard>
        </div>
      </section>

      <section>
        <AnimatedCard delay={0.2}>
          <About/>
        </AnimatedCard>
      </section>

      <section className="flex flex-col lg:flex-row lg:items-stretch lg:h-full gap-4">
          <div className="lg:w-[65%] flex flex-col">
            <AnimatedCard delay={0.3}> 
              <Experience/>
            </AnimatedCard>
          </div>
        
        <div className="lg:w-[35%] flex flex-col gap-4">
          <AnimatedCard className="flex-1" delay={0.4}>
              <RecentProjects/>
          </AnimatedCard>
          <AnimatedCard className="flex-1" delay={0.5}>
              <TechStacks/>
          </AnimatedCard>
        </div>
      </section>
    </section>
  );
}
