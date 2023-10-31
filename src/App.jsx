import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Table from './components/Table'

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/' //free api url
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`) //fetch api syntax
        const data = await response.json() //get response json

        setItems(data) //assign fetched data to items state
      } catch (err) {
        console.log(err)
      }
    }

    fetchItems() //call fetch items funciton
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
        <div className="container overflow-y-auto rounded-3 border mb-3" style={{maxHeight: '75vh'}}>
          {/* <List items={items} /> */}
          <Table 
            items={items}
          />
        </div>
      </main>
    </>
  )
}

export default App
