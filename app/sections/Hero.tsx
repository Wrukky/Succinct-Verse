import WavyTitle from '../components/WavyTitle'

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-6 text-center">
      <WavyTitle text="SuccinctVerse" className="mb-6" />
      <p className="text-gray-400 max-w-3xl text-lg md:text-xl">
        A visual journey through the Succinct whitepaper — simplified, explained, and brought to life.
      </p>
    </section>
  )
}


