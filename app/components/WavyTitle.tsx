interface WavyTitleProps {
  text: string
  className?: string
}

export default function WavyTitle({ text, className = '' }: WavyTitleProps) {
  return (
    <h1
      className={`text-5xl md:text-6xl font-extrabold tracking-tight wave-text ${className}`}
      style={{ color: '#ff49a1' }} // Custom pink color
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ animationDelay: `${index * 0.05}s` }}
          className="inline-block animate-wave"
        >
          {char}
        </span>
      ))}
    </h1>
  )
}

