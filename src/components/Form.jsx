import React from 'react'
import Button from './Button'

const Form = ({ reqType, setReqType }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="row justify-content-center border-bottom mb-3">
            <div className="col-md text-center">
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Fetch Users'
                />
            </div>
            <div className="col-md text-center">
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Fetch Posts'
                />
            </div>
            <div className="col-md text-center mb-3">
                <Button 
                    reqType={reqType}
                    setReqType={setReqType}
                    btnName='Fetch Comments'
                />
            </div>
        </form>
    )
}

export default Form