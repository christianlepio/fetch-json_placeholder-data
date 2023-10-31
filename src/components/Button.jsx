import React, { useMemo } from 'react'

const Button = ({ reqType, setReqType, btnName }) => {
    // const buttonText = useMemo(() => {
    //     const words = btnName.toLowerCase().split(' ')
    //     return words[1]
    // }, [reqType])

    return (
        <button 
            type='button'
            className={'btn mb-2 '+(btnName.toLowerCase() === reqType ? 'btn-light' : 'btn-outline-light')}
            onClick={() => setReqType(btnName.toLowerCase())}
        >
            {btnName}
        </button>
    )
}

export default Button