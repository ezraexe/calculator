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
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          (
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          )
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          %
        </Button>
        <Button variant="destructive" className="border cursor-pointer hover:bg-red-500 transition-all duration-300">
          AC
        </Button>

        {/* Second Row */}
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          7
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          8
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          9
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">÷</Button>

        {/* Third Row */}
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          4
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          5
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">
          6
        </Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">×</Button>

        {/* Fourth Row */}
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">1</Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">2</Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">3</Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">-</Button>

        {/* Fifth Row */}
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">0</Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">.</Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">=</Button>
        <Button variant="secondary" className="border cursor-pointer hover:bg-gray-200 transition-all duration-300">+</Button>

      </div> 
    </div> 

  )
}