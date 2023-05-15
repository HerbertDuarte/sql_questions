import React from 'react'
import '../app/globals.css'
import { useRouter } from 'next/navigation'

export default function Card({data}) {

  const router = useRouter()

  return (
    <div className='p-2 my-4 border-2 border-blue-500/50 rounded-md bg-white/30'>
      <h3 className='sm:text-xl text-lg font-semibold text-slate-700'>{data.title}</h3>
      <p>{data.body}</p>
      <button onClick={()=> router.push("/singlequestion/" + data.id)} className='px-4 py-2 rounded-md mt-2 inline-block bg-blue-500 text-white' >Answers</button>
    </div>
  )
}
