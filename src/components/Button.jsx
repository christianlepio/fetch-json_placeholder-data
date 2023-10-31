import React, { useMemo } from 'react'

const Button = ({ reqType, setReqType, btnName }) => {
    const buttonText = useMemo(() => {
        const words = btnName.toLowerCase().split(' ')
        return words[1]
    }, [reqType])

    return (
        <button 
            type='button'
            className={'btn mb-2 '+(buttonText === reqType ? 'btn-light' : 'btn-outline-light')}
            onClick={() => setReqType(buttonText)}
        >
            {btnName}
        </button>
    )
}

export default Button