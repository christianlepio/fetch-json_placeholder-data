import React from 'react'
import Button from './Button'

const Form = ({ reqType, setReqType }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="d-flex justify-content-center border-bottom mb-3">
            <div>
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Users'
                />
            </div>
            <div className='mx-3 border'>
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Posts'
                />
            </div>
            <div className="mb-3">
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Comments'
                />
            </div>
        </form>
    )
}

export default Form