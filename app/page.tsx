import ScrollyCanvas from "@/components/ScrollyCanvas";
import FinalContent from "@/components/FinalContent";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollDownHint from "@/components/ScrollDownHint";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <ThemeToggle />
      <ScrollDownHint />
      <ScrollyCanvas />
      <FinalContent />
    </main>
  );
}