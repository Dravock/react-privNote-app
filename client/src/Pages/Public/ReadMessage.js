import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ReadMessage(props) {
  const { message_id } = props
  const [data , setData] = useState()

  const get_message = async () => {
    return axios.get(process.env.REACT_APP_BASE_URL_BACKEND+`/app-data/app-data.php?id=${message_id.id}`)
    .then((response)=>{
      setData(response.data[0])
      console.log(response.data[0])
    })
    .catch((err)=>{
      console.log("Ein Fehler beim abfragen: ", err)
    })
  }

  useEffect(() => {
    get_message()
  }, [])
  

  return (
    <div>
      {data.message}
    </div>
  )
}

export default ReadMessage