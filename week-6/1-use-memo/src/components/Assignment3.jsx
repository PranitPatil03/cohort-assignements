import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

  const calTotalAmount=(items)=>{
    
    let totalVal=0;

    items.map((item)=>{
      console.log(item)
      totalVal+=item.value
    })
    console.log(totalVal)
    return totalVal
  }

    const totalValue = useMemo(() => calTotalAmount(items), [items])

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};

export default Assignment3;
