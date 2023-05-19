import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Content from "@/components/Content";


export default function Home() {
  return (
    <main className="leading-none">
      <Header />
      <Content />
    </main>
  );
}
