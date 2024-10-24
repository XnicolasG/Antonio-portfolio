import NumberFlow from '@number-flow/react'
import React, { useState } from 'react'

export const YearsExperience = () => {
    const [value ] = useState(30)
    console.log(value);
    
    return (
        <section>
            <NumberFlow
                className='text-4xl'
                value={value}
                trend={false}
                format={{ notation: 'compact' }}
                locales="en-US"
            />
        </section>
    )
}
