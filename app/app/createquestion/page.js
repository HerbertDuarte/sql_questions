import React from "react";
import "../globals.css";

export default function page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 px-4">

      <h1 className="sm:text-3xl text-2xl my-4">Create a new question</h1>

      <form
        className="w-full max-w-2xl flex flex-col items-center justify-center gap-2"
        method="POST"
        action="http://localhost:3001/savedata"
      >
        <label className="w-full"
        ><p>Title</p>
        
        <input
          className="w-full bg-slate-400/70 focus:bg-slate-500 focus:placeholder:text-white/75 text-white/90  p-2 rounded-md border-0 focus:outline-none placeholder:text-slate-700 transition-all duration-300"
          placeholder="Type a title"
          type="text"
          name="title"
          id="title"
        />
        </label>
        <label className="w-full">
        <p>Body</p>
          
        <textarea
          className="resize-none w-full bg-slate-400/70 focus:bg-slate-500 focus:placeholder:text-white/75 text-white/90 h-24 p-2 rounded-md border-0 focus:outline-none placeholder:text-slate-700 transition-all duration-300"
          placeholder="Type your question"
          name="body"
          id="body"
        ></textarea>
        </label>
        <input 
          className="bg-blue-500 py-2 px-5 rounded-md text-white/90" 
          type="submit" 
          value="Send" />
      </form>
    </main>
  );
}
