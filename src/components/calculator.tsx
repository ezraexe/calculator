'use client' 
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Calculator() { 
  const [expression, setExpression] = useState('0');
  const [resetExpression, setResetExpression] = useState(false);

  const handleClear = () => {
    setExpression('0');
    setResetExpression(false); 
  };

  const handleDigit = (digit : string) => { 
    // when we have an answer displayed then press a digit, we reset the expression with the digit 
    if (resetExpression) { 
      setExpression(digit); 
      setResetExpression(false);
    } else { 
      setExpression(expression === '0' ? digit : expression + digit)
    }
    // else we append digit to expression 
  };

  const handleOperator = (operator : string) => { 
    // if we have an expression, we append the operator to the expression 

    // for edge case where we have an answer displayed then press an operator, we reset the expression with the operator 
    setResetExpression(false); 

    if (['+', '-', '×', '÷'].some(op => expression.endsWith(' ' + op + ' '))) {
      setExpression(expression.slice(0, -3) + ' ' + operator + ' '); 
    } else { 
      setExpression(expression + ' ' + operator + ' ' )
    }
  };

  const handleDecimal = () => { 
    if (resetExpression) { 
      setExpression('0.'); 
      setResetExpression(false); 
      return;
    }
    
    const parts = expression.split(' ');
    const lastPart = parts[parts.length - 1]; 

    if (!lastPart.includes('.')) { 
      setExpression(expression + '.')
    }
  };

  const handleEquals = () => { 
    try { 
      let evalExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
      const result = eval(evalExpression); 
      setExpression(result.toString()); 
      setResetExpression(true); 
    } catch (error) { 
      setExpression('Error'); 
      setResetExpression(true); 
    }
  };

  const handleParentheses = (parenthesis : string) => {
    // when we have an answer displayed then press a parenthesis, we reset the expression with the parenthesis 
    if (resetExpression) { 
      setExpression(parenthesis); 
      setResetExpression(false);
    } else { 
      setExpression(expression === '0' ? parenthesis : expression + parenthesis); 
    }
  };

  const handlePercentage = () => { 
    try { 
      const parts = expression.split(' '); 
      const lastPart = parts[parts.length - 1]; 

      if (!isNaN(parseFloat(lastPart))) { 
        const percentValue = parseFloat(lastPart) / 100; 
        parts[parts.length - 1] = percentValue.toString(); 
        setExpression(parts.join(' '));
      }
    } catch (error) { 
      setExpression('Error'); 
      setResetExpression(true); 
    }
  };

  // const handleBackspace = () => {
  // }


  return (
    <div className="w-96 border rounded-xl bg-muted shadow-xl p-4"> 
      <div className="bg-white dark:bg-slate-700 p-3 mb-4 rounded-md text-right text-2xl h-16 flex flex-col items-end justify-center border">
          {expression}
      </div>
      
      <div className="grid grid-cols-4 gap-2.5"> 
        {/* First Row */}
        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleParentheses('(')}
        >
          (
        </Button>
        
        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleParentheses(')')}
        >
          )
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={handlePercentage}
        >
          %
        </Button>

        <Button 
          variant="destructive" 
          className="border cursor-pointer hover:bg-red-500 transition-all duration-300" 
          onClick={handleClear}
        >
          AC
        </Button>

        {/* Second Row */}
        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('7')}
        >
          7
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('8')}
        >
          8
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('9')}
        >
          9
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleOperator('÷')}
        > 
          ÷ 
        </Button>

        {/* Third Row */}
        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('4')}
        >
          4
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('5')}
        >
          5
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('6')}
        >
          6
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleOperator('×')}
        > 
          × 
        </Button>

        {/* Fourth Row */}
        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('1')}
        >
          1
        </Button> 

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('2')}
        >
          2
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('3')}
        >
          3
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleOperator('-')}
        > 
          - 
        </Button>

        {/* Fifth Row */}
        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleDigit('0')}
        >
          0
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={handleDecimal}
        >
          .
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={handleEquals}
        > 
          = 
        </Button>

        <Button 
          variant="secondary" 
          className="border cursor-pointer hover:bg-gray-200 transition-all duration-300" 
          onClick={() => handleOperator('+')}
        > 
          + 
        </Button>

      </div> 
    </div> 
  )
}