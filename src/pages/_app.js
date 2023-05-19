import '@/styles/globals.css'
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"], // I want this font-weight has 400,500,600,700,800,900
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
