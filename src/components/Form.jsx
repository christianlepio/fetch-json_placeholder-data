import React from 'react'
import Button from './Button'

const Form = ({ reqType, setReqType }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="row justify-content-center border-bottom mb-3">
            <div className="col text-center">
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Users'
                />
            </div>
            <div className="col text-center">
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Posts'
                />
            </div>
            <div className="col text-center mb-3">
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