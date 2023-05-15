import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserList() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [listOfUSers, setListOfUsers] = useState([])

  const fetchInfo = () => {
    return axios.get(url).then((res) => setListOfUsers(res.data))
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <div>
      <h1 style={{ color: 'green' }}>List of users</h1>
      <center>
        {listOfUSers.map((dataObj, index) => {
          return (
            <div
              style={{
                width: '15em',
                backgroundColor: '#CD8FFD',
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.email}</p>
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.phone}</p>
            </div>
          )
        })}
      </center>
    </div>
  )
}

export default UserList
