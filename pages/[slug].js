import Link from 'next/link'
import Head from 'next/head'

import { request } from "../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { parseISO, format } from 'date-fns'

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'

import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Work({ data: { site, work, nextArticle, contact } }) {
  const metaTags = work.seo.concat(site.favicon);
  let date = null;
  let nextArticleLengthRaw = nextArticle.length;
  let nextArticleLength = Math.floor(Math.random() * nextArticleLengthRaw)
  
  if (work.completionDate) {
    date = parseISO(work.completionDate) 
  }
  
  return (
    <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>

      <Header email={contact.emailAddress} />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className=""
      >
        <motion.div variants={fade}>
          <section className="mb-2 md:mb-20 xl:mb-28">
            <Container wide>
              <div className="relative overflow-hidden flex flex-wrap">
                <div className="w-full py-12 lg:py-16 xl:py-20 relative z-10 order-2 md:order-1 -mt-6 md:mt-[20vh]">
                  <Container>
                    <h1 className="text-6xl md:text-[64px] lg:text-[72px] xl:text-[90px] 2xl:text-[100px] mb-3 md:mb-5 xl:mb-6 leading-extra-tight w-full md:w-10/12">{ work.title }</h1>
                    <div className="content max-w-2xl mb-6 md:mb-10 xl:mb-12">
                      <p className="text-[17px] xl:text-[19px] text-purple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a velit id elit placerat bibendum. Aliquam dapibus elit sed urna.</p>
                    </div>

                    <div className="flex flex-wrap md:-mx-3 w-full max-w-2xl">
                      { work.whatIDid && (
                        <div className="w-full md:w-1/3 md:px-3 mb-3 md:mb-0">
                          <span className="block font-bold text-[17px] xl:text-[19px] md:mb-1 xl:mb-2">What I Did</span>
                          <span className="block">{ work.whatIDid }</span>
                        </div>
                      )}
                      { date && (
                        <div className="w-full md:w-1/3 md:px-3 mb-3 md:mb-0">
                          <span className="block font-bold text-[17px] xl:text-[19px] md:mb-1 xl:mb-2">Completed</span>
                          <span className="block"> <time dateTime={work.completionDate}>{format(date, 'LLLL	d, yyyy')}</time></span>
                        </div>
                      )}
                      { work.linkToProject && (
                        <div className="w-full md:w-1/3 md:px-3 md:mb-0">
                          <span className="block font-bold text-[17px] xl:text-[19px] md:mb-1 xl:mb-2">Link</span>
                          <a href={work.linkToProject} rel="noopener noreferrer" target="_blank" className="block underline focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 hover:text-purple focus:text-purple">{work.linkToProject}</a>
                        </div>
                      )}
                    </div>
                  </Container>
                </div>
                
                <div className="md:absolute inset-0 w-full h-full z-0 order-1 md:order-2">
                  <div className="blend-image h-full overflow-hidden md:absolute inset-0">
                    <Image
                      data={{
                        ...work.heroImage.responsiveImage,
                        alt: work.heroImage.alt ? work.heroImage.alt : work.heroImage.title,
                      }}
                      className="w-full h-full blend-image-inner md:absolute inset-0"
                    />
                  </div>
                  {/* <img src="https://placedog.net/1600/640" className="w-full h-full object-cover object-top opacity-20" alt="Ben" /> */}
                </div>
              </div>    
            </Container>
          </section>


          {
            work.contentBlocks.map((block, i) => (
              <section key={block.id} className="mb-12 md:mb-20 xl:mb-32 overflow-hidden">
                {
                  block._modelApiKey === 'image_text' &&
                  <Container>
                    <div className="flex flex-wrap items-center md:-mx-5">
                      <div className="w-full md:w-1/2 md:px-5 mb-5 md:mb-0">
                        <Image
                          data={{
                            ...block.image.responsiveImage,
                            alt: block.image.alt ? block.image.alt : block.image.title,
                          }}
                          className="w-full"
                        />
                      </div>
                      <div className="w-full md:w-1/2 md:px-5">
                        <div className="w-full md:max-w-xl mx-auto content content--fancy">
                          <h2>{ block.heading }</h2>
                          
                          <div dangerouslySetInnerHTML={{ __html: block.text }} />
                        </div>
                      </div>
                    </div>
                  </Container>
                }
                {
                  block._modelApiKey === 'text_right_aligned_title' &&
                  <Container>
                    <div className="flex flex-wrap md:-mx-5">
                      <div className="w-full md:w-5/12 md:px-5 content content--fancy">
                        <h2 className="md:text-right md:max-w-lg ml-auto">{block.heading}</h2>
                      </div>
                      <div className="w-full md:w-7/12 md:px-5">
                        <div className="w-full max-w-2xl mx-auto content content--fancy" dangerouslySetInnerHTML={{ __html: block.text}}>
                        </div>
                      </div>
                    </div>
                  </Container>
                }
                {
                  block._modelApiKey === 'image_full_width' &&
                  <Container>
                    <Image
                      data={{
                        ...block.image.responsiveImage,
                        alt: block.image.alt ? block.image.alt : block.image.title,
                      }}
                      className="w-full"
                    />
                  </Container>
                }
                {
                  block._modelApiKey === 'text_full_width' &&
                  <Container>
                    <div className="flex flex-wrap md:-mx-5">
                      <div className="w-full md:w-8/12 xl:w-7/12 mx-auto content content--fancy" dangerouslySetInnerHTML={{__html: block.text}}>
                      </div>
                    </div>
                  </Container>
                }
                {
                  block._modelApiKey === 'quote_full_width' &&
                  <Container>
                    <blockquote className={`flex flex-wrap relative ${block.image ? 'md:py-24 xl:py-32' : ''}`}>
                      <p className="text-4xl md:text-[46px] lg:text-[55px] xl:text-[63px] 2xl:text-[68px] mb-5 md:mb-8 xl:mb-12 leading-extra-tight font-display text-purple w-full md:w-9/12 mx-auto">{ block.text }</p>

                      { block.image && (
                        <div className="blend-image h-full overflow-hidden md:absolute top-0 right-0 bottom-0 -mt-24 md:mt-0">
                          <Image
                            data={{
                              ...block.image.responsiveImage,
                              alt: block.image.alt ? block.image.alt : block.image.title,
                            }}
                            className="w-full h-full ml-auto blend-image-inner"
                          />
                        </div>
                      )}
                    </blockquote>
                  </Container>
                }
                
              </section>
            ))
          }

          <section className="mb-6 md:mb-8 xl:mb-12">
            <Container>
              <hr className="border-b-1 border-purple border-opacity-10 mb-6 md:mb-16 xl:mb-16" />

              <div className="flex flex-wrap w-full">
                <Link href={`/${nextArticle[nextArticleLength].slug}`}>
                  <a className="ml-auto inline-block text-right group focus:outline-none focus:ring focus:ring-purple focus:ring-opacity-10 focus:ring-offset-4 focus:ring-offset-offwhite">
                    <span className="text-purple block">Next Project ⟶</span>
                    <span className="h2 transition ease-in-out duration-300 group-hover:text-purple group-focus:text-purple">{nextArticle[nextArticleLength].title}</span>
                  </a>
                </Link>
              </div>
            </Container>

          </section>
          
          <Footer socials={contact.socials} />
        </motion.div>
      </motion.div>
    </Layout>
  )
}

const WORK_QUERY = `
  query WorkSlugQuery($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    nextArticle: allWorks(filter: {slug: {neq: $slug}}, orderBy: _createdAt_ASC) {
      title
      slug
    }
    contact: contact {
      emailAddress
      socials {
        name
        url
      }
    }
    work: work(filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      whatIDid
      completionDate
      linkToProject
      heroText
      heroImage {
        responsiveImage(
          imgixParams: {fm: jpg, fit: crop, w: 1600, h: 720, auto: format, q: 100 }) {
          ...responsiveImageFragment
          }
        title
        alt
      }
      contentBlocks {
        ... on ImageTextRecord {
          id
          _modelApiKey
          image {
            responsiveImage(
              imgixParams: {fm: jpg, fit: crop, w: 900, h: 900, auto: format, q: 100 }) {
              ...responsiveImageFragment
              }
            title
            alt
          }
          heading
          text
        }
        ... on TextRightAlignedTitleRecord {
          id
          _modelApiKey
          heading
          text
        }
        ... on ImageFullWidthRecord {
          id
          _modelApiKey
          image {
            responsiveImage(
              imgixParams: {fm: jpg, fit: crop, w: 1400, h: 680, auto: format, q: 100 }) {
              ...responsiveImageFragment
              }
            title
            alt
          }
        }
        ... on TextFullWidthRecord {
          id
          _modelApiKey
          text
        }
        ... on QuoteFullWidthRecord {
          id
          _modelApiKey
          text
          image {
            responsiveImage(
              imgixParams: {fm: jpg, fit: crop, w: 640, h: 640, auto: format, q: 100 }) {
              ...responsiveImageFragment
              }
            title
            alt
          }
        }
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps({params}) {
  const data = await request({
    query: WORK_QUERY,
    variables: {
      slug: params.slug,
    },
  })

  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths() {
  const data = await request({ query: `{ allWorks { slug } }` });

  return {
    paths: data.allWorks.map((work) => `/${work.slug}`),
    fallback: false,
  };
}