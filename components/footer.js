import Container from './container'

export default function Footer({ socials }) {
  return (
    <footer className="py-6 md:py-8 mb-4">
      <Container>
        <small className="flex flex-wrap">
          <div className="md:ml-auto flex flex-wrap">
            { socials && (
              <>
                {
                  socials.map((block, i) => (
                    <a key={i} href={block.url} target="_blank" rel="noopener noreferrer" className="block transition duration-200 ease-in-out hover:text-purple underline focus:text-purple focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 focus:ring-offset-4 focus:ring-offset-offwhite mr-2 md:ml-4 md:mr-0">{block.name}</a>
                  ))
                }
              </>
            )}
            <span className="block w-full md:w-auto ml-0 md:ml-3 mt-2 md:mt-0">Site by <a href="https://samgoddard.co.uk" target="_blank" rel="noopener noreferrer" className="transition duration-200 ease-in-out focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 focus:ring-offset-4 focus:ring-offset-offwhite underline hover:text-purple focus:text-purple">SG</a> &amp; <a href="https://georgewood.me" target="_blank" rel="noopener noreferrer" className="transition duration-200 ease-in-out focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 focus:ring-offset-4 focus:ring-offset-offwhite underline hover:text-purple focus:text-purple">GW</a> — &copy;{ new Date().getFullYear() }</span>
          </div>
        </small>
      </Container>
    </footer>
  )
}