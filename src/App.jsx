import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Table from './components/Table'

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/' //free api url
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`) //fetch api syntax
        const data = await response.json() //get response json

        setItems(data) //assign fetched data to items state
      } catch (err) {
        console.log(err.message)
        setIsError(true)
        setIsLoading(true)
      }
    }

    fetchItems() //call fetch items funciton

    setTimeout(() => {  
      if (isError) setIsLoading(true)
      else setIsLoading(false)
    }, 2000) 

  }, [reqType])

  return (
    <>
      <header>
        <h3 className='fs-3 text-center my-2 mb-4'>Fetch data from JSON placeholder using Fetch API</h3>
        <Form
            reqType={reqType}
            setReqType={setReqType}
        />
      </header>
      <main>
        {isLoading ? 
          //spinners for loading
          <>
            <div className="d-flex justify-content-center mt-5 pt-5 pb-4">
              <div className="spinner-grow text-primary mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden mt-5">Loading...</span>
              </div>&nbsp;&nbsp;
              <div className="spinner-grow text-success mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden mt-5">Loading...</span>
              </div>&nbsp;&nbsp;
              <div className="spinner-grow text-danger mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden mt-5">Loading...</span>
              </div>&nbsp;&nbsp;
              <div className="spinner-grow text-warning mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden mt-5">Loading...</span>
              </div>&nbsp;&nbsp;
              <div className="spinner-grow text-light mt-5" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden mt-5">Loading...</span>
              </div>
            </div>
            {isError ? 
              <div className='d-flex justify-content-center'>
                <p>You're not Connected! try to check your internet connection, and reload page.</p>
              </div> : null
            }
          </>
        :
          isError ? 
            <div className='d-flex justify-content-center mt-5 pt-4'>
              <p>You're not Connected! try to check your internet connection, and reload page.</p>
            </div>
          :
            <div className="container overflow-y-auto rounded-3 border mb-3" style={{maxHeight: '75vh'}}>
              {/* <List items={items} /> */}
              <Table 
                items={items}
              />
            </div>
        }
      </main>
    </>
  )
}

export default App
