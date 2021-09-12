import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState("HelloWorld")
  return (
    <div>
      hello {message}
      <input type="text" onInput={(e) => setMessage((e.target as HTMLInputElement).value)}/>
    </div>
  )
}
