import Link from 'next/link'

export default function fancyLink( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`text-purple inline-block hover:text-purpledark focus:text-purpledark transition duration-200 ease-in-out focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 focus:ring-offset-4 focus:ring-offset-offwhite group ${extraClasses}`}>
        {label} <span className="inline-block transition duration-300 ease-in-out transform-gpu group-hover:translate-x-2">⟶</span>
      </a>
    </Link>
  )
}