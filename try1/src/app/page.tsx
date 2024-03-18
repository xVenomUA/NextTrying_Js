import MainPage from "@/components/mainPage/mainPage"; // Виправлено імпорт та назву компонента
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Very good programming language</h1> {/* Виправлено текст */}
      <MainPage /> {/* Виправлено назву компонента */}
      <Link href="/about">Next</Link>
    </main>
  );
}
