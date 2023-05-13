import React from 'react'
import '../app/globals.css'

export default function Card({data}) {
  return (
    <div className='p-2 my-4 border-2 border-blue-500/50'>
      <h3 className='text-3xl'>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  )
}
