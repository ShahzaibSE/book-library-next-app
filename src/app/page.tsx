import Image from 'next/image'
import { Inter } from 'next/font/google'
// 
import HomePage from '@/components/Home/Home'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const books = await fetch("https://simple-books-api.glitch.me/books");
  console.log(books);
  return (
    <main className="flex min-h-screen container flex-col items-center justify-between p-24">
      <HomePage/>
    </main>
  )
}
