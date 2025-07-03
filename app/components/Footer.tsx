// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 flex flex-col items-center space-y-4">
      <div className="text-lg">
        Follow me on{' '}
        <a
          href="https://twitter.com/wru_kii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          @wru_kii
        </a>
      </div>
      <div className="flex gap-6">
        <a
          href="https://zk-dodge.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          zk dodge
        </a>
        <a
          href="https://succinct-summer-vibes.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          succinct summer vibes
        </a>
        <a
          href="https://succinct-anagram.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          succinct anagram
        </a>
      </div>
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} wrukii</p>
    </footer>
  )
}
