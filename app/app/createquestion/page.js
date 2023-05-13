import React from "react";
import "../globals.css";

export default function page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 px-4">
      <form
        className="w-full flex flex-col items-center justify-between"
        method="POST"
        action="http://localhost:3001/savedata"
      >
        <label className="w-full" htmlFor="title">Title</label>
        <input
          className="w-full bg-slate-400/70 focus:bg-slate-500 focus:placeholder:text-white/75 text-white/90  p-2 rounded-md border-0 focus:outline-none placeholder:text-slate-700"
          placeholder="Type a title"
          type="text"
          name="title"
          id="title"
        />
        <label  className="w-full" htmlFor="body">Body</label>
        <textarea
          className="resize-none w-full bg-slate-400/70 focus:bg-slate-500 focus:placeholder:text-white/75 text-white/90 h-24 p-2 rounded-md border-0 focus:outline-none placeholder:text-slate-700"
          placeholder="Type your question"
          name="body"
          id="body"
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
