import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Slurm Learns",
  description: "Kids learning stuff",
};

function NavigationBar() {
  return (
    <nav>
      <ul className="flex flex-row gap-4 border-b-amber-300 border-b">
        <li>
          <Link href="./">My home</Link>
        </li>
        <li>
          <Link href="./bio">Bio</Link>
        </li>
        <li>
          <Link href="./contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-600 text-white m-4">
        <NavigationBar />
        <div className="mt-2">{children}</div>
      </body>
    </html>
  );
}
