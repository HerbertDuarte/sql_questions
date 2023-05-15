import React from 'react'
import '../globals.css'
import Link from 'next/link'

export default function page() {
  return (
    <main className="flex min-h-container flex-col items-center justify-center pt-16 px-4">
      <h1 className='sm:text-3xl text-2xl text-center'>Successfully saved data!</h1>
      <Link href='/' className='px-4 py-2 rounded-md mt-4 inline-block bg-blue-500 text-white'>Back to home</Link>
    </main>
  )
}
