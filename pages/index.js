import Head from 'next/head'
import { request } from "../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'

import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Home({ data: { site, home, work } }) {
  const metaTags = home.seo.concat(site.favicon);
  
  return (
    <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>

      <Header />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className=""
      >
        <motion.div variants={fade}>
          <Container>
            <section className="mb-10 md:mb-16 xl:mb-24">
              <div className="flex flex-wrap relative md:py-16 xl:py-24">
                <div className="w-full md:w-7/12 relative z-10 order-2 md:order-1 -mt-20 md:mt-0">
                  <h1 className="text-5xl md:text-[58px] lg:text-[62px] xl:text-[75px] 2xl:text-[80px] mb-5 md:mb-8 xl:mb-12 leading-extra-tight">Ben Scothern is a <span>creative copywriter</span> from Nottingham</h1>
                  <div className="content max-w-2xl">
                    <div className="mb-5 md:mb-8 content content--fancy" dangerouslySetInnerHTML={{ __html: home.heroText }}>
                    </div>

                    <div className="flex items-center text-lg xl:text-xl">
                      <div className="mr-5 md:mr-8 xl:mr-12">
                        <a href="#work" className={`text-purple inline-block hover:text-purpledark focus:text-purpledark transition duration-200 ease-in-out transform-gpu hover:translate-x-2 focus:translate-x-2 focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 focus:ring-offset-4 focus:ring-offset-offwhite`}>
                          Read My Work ⟶
                        </a>
                      </div>

                        <a href="mailto:ben@ben.com" className={`text-purple inline-block hover:text-purpledark focus:text-purpledark transition duration-200 ease-in-out transform-gpu hover:translate-x-2 focus:translate-x-2 focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 focus:ring-offset-4 focus:ring-offset-offwhite`}>
                          Get In Touch ⟶
                        </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-8/12 md:absolute top-0 right-0 bottom-0 z-0 order-1 md:order-2">
                  {/* <img src="https://placedog.net/800/800" className="w-full h-full object-cover object-center opacity-25" alt="Ben" /> */}

                  <div className="blend-image h-full overflow-hidden md:absolute inset-0">
                    <Image
                      data={{
                        ...home.heroImage.responsiveImage,
                        alt: home.heroImage.alt ? home.heroImage.alt : home.heroImage.title,
                      }}
                      className="w-full h-full blend-image-inner md:absolute inset-0"
                    />
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-b-1 border-purple border-opacity-10 mb-10 md:mb-16 xl:mb-24" />

            <section className="mb-5 md:mb-8 xl:mb-12 overflow-hidden" id="work">
              <div className="flex flex-wrap md:-mx-8">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <div className="w-full md:w-1/2 lg:w-1/3 md:px-8 mb-10 md:mb-16 xl:mb-20 2xl:mb-24" key={i}>
                      <h2 className="text-4xl md:text-[40px] lg:text-[44px] xl:text-[50px] 2xl:text-[54px] mb-4 md:mb-6 xl:mb-8 leading-extra-tight">Project Name Goes Here.</h2>
                      <p className="text-[17px] xl:text-[19px] mb-3 md:mb-5 xl:mb-7 w-10/12 xl:w-11/12 block">Brief project description explaining what work was done lorem ipsum dolor.</p>
                      
                      <div className="text-lg md:text-xl">
                        <FancyLink destination="/work" a11yText="Navigate to the about page" label="Let's Go" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </Container>

          <Footer />
        </motion.div>
      </motion.div>
    </Layout>
  )
}

const HOME_QUERY = `
  query HomePage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      heroHeading
      heroText
      heroImage {
        responsiveImage(
          imgixParams: {fm: jpg, fit: crop, w: 1600, h: 1400, auto: format, q: 100 }) {
          ...responsiveImageFragment
          }
        title
        alt
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: HOME_QUERY
  })

  return {
    props: {
      data,
    },
  }
}