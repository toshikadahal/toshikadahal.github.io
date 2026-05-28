import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function TrialPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <ScrollyCanvas />
      <Projects />
    </main>
  );
}