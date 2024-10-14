'use client'

import { useEffect, useState } from "react";

const Formater = new Intl.NumberFormat("id-iD", {
  minimumFractionDigits: 0,
  style: "currency",
  currency: "IDR",
});


interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted , setIsMounted ] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }


  return (
    <div className="font-semibold">
        {Formater.format(Number(value))}
    </div>
  )
};

export default Currency;
