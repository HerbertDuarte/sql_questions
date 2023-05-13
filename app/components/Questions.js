"use client"

import {useState, useEffect} from 'react'
import '../app/globals.css'
import Card from './Card'
import api from '@/api'
import Loading from './Loading'

export default function Questions() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    api
      .get("/")
      .then((response) => setData(response.data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      {!data && !error && <Loading/>}
      {data && <h1 className='text-4xl font-bold text-slate-700'>Questions</h1>}
      {data && data.map((question)=>(
        <Card key={question.id} data={question}/>
      ))}
      {error && <p>{error.message}</p>}
    </div>
  )
}