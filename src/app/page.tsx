import { ModeToggle } from "@/components/darkmode";
import { Calculator } from "@/components/calculator";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <h1 className="text-3xl font-bold mb-8">Ezra's Calculator</h1>
      
      <Calculator /> 

    </main>
  );
}
