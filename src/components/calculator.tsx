'use client' 
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Calculator() { 
  const [expression, setExpression] = useState('0');
  const [resetExpression, setResetExpression] = useState(false);

  const handleClear = () => {
    setExpression('0');
    setResetExpression(false); 
  }

  const handleDigit = (digit : string) => { 
    // when we have an answer displayed then press a digit, we reset the expression with the digit 
    if (resetExpression) { 
      setExpression(digit); 
      setResetExpression(false);
    } else { 
      setExpression(expression === '0' ? digit : expression + digit)
    }
    // else we append digit to expression 
  }

  const handleOperator = (operator : string) => { 
    // if we have an expression, we append the operator to the expression 

    
  }


  return (
    <div className="w-96 border rounded-xl bg-muted shadow-xl p-4"> 
      <div className="bg-white dark:bg-slate-700 p-3 mb-4 rounded-md text-right text-2xl h-16 flex flex-col items-end justify-center border">
          {expression}
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