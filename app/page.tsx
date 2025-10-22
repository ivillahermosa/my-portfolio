import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Introduction from "@/components/main/Introduction";
import SocialLinks from "@/components/main/SocialLinks";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <section className="flex flex-col lg:flex-row gap-4">
        <Introduction/>
        <SocialLinks/>
      </section>

      <section>
        <About/>
      </section>

      <section>
        <Experience/>
      </section>
    </section>
  );
}
