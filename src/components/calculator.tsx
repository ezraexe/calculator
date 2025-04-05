'use client' 
import { Button } from "@/components/ui/button"

export function Calculator() { 





  return (
    <div className="w-96 border rounded-xl bg-muted shadow-xl p-4"> 
      <div className="bg-white dark:bg-slate-700 p-3 mb-4 rounded-md text-right text-2xl h-16 flex items-center justify-end border">
        0
      </div>
      
      <div className="grid grid-cols-4 gap-2.5"> 
        {/* First Row */}
        <Button variant="secondary" className="border">(</Button>
        <Button variant="secondary" className="border">)</Button>
        <Button variant="secondary" className="border">%</Button>
        <Button variant="destructive" className="border">AC</Button>

        {/* Second Row */}
        <Button variant="secondary" className="border">7</Button>
        <Button variant="secondary" className="border">8</Button>
        <Button variant="secondary" className="border">9</Button>
        <Button variant="secondary" className="border">÷</Button>

        {/* Third Row */}
        <Button variant="secondary" className="border">4</Button>
        <Button variant="secondary" className="border">5</Button>
        <Button variant="secondary" className="border">6</Button>
        <Button variant="secondary" className="border">×</Button>

        {/* Fourth Row */}
        <Button variant="secondary" className="border">1</Button>
        <Button variant="secondary" className="border">2</Button>
        <Button variant="secondary" className="border">3</Button>
        <Button variant="secondary" className="border">-</Button>

        {/* Fifth Row */}
        <Button variant="secondary" className="border">0</Button>
        <Button variant="secondary" className="border">.</Button>
        <Button variant="secondary" className="border">=</Button>
        <Button variant="secondary" className="border">+</Button>

      </div> 
    </div> 

  )
}