import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Work() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nextjs boilerplate - Work</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

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
                <div className="w-full py-12 lg:py-16 xl:py-20 relative z-10 order-2 md:order-1 -mt-20 md:mt-48 lg:mt-56 xl:mt-72 2xl:mt-96">
                  <Container>
                    <h1 className="text-6xl md:text-[64px] lg:text-[72px] xl:text-[90px] 2xl:text-[100px] mb-3 leading-extra-tight">Project Name</h1>
                    <div className="content max-w-2xl mb-6 md:mb-10 xl:mb-12">
                      <p className="text-[17px] xl:text-[19px] text-purple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a velit id elit placerat bibendum. Aliquam dapibus elit sed urna.</p>
                    </div>

                    <div className="flex flex-wrap md:-mx-3 w-full max-w-2xl">
                      <div className="w-full md:w-1/3 md:px-3 mb-3 md:mb-0">
                        <span className="block font-bold text-[17px] xl:text-[19px] md:mb-1 xl:mb-2">What I Did</span>
                        <span className="block">Creative Copywriting</span>
                      </div>
                      <div className="w-full md:w-1/3 md:px-3 mb-3 md:mb-0">
                        <span className="block font-bold text-[17px] xl:text-[19px] md:mb-1 xl:mb-2">Completed</span>
                        <span className="block">January 2020</span>
                      </div>
                      <div className="w-full md:w-1/3 md:px-3 md:mb-0">
                        <span className="block font-bold text-[17px] xl:text-[19px] md:mb-1 xl:mb-2">Link</span>
                        <a href="www.google.com" rel="noopener noreferrer" target="_blank" className="block underline">www.google.com</a>
                      </div>
                    </div>
                  </Container>
                </div>
                
                <div className="md:absolute inset-0 w-full h-full z-0 order-1 md:order-2">
                  <img src="https://placedog.net/1600/640" className="w-full h-full object-cover object-top opacity-20" alt="Ben" />
                </div>
              </div>    
            </Container>
          </section>
          
          <section className="mb-12 md:mb-20 xl:mb-32 overflow-hidden">
            <Container>
              <div className="flex flex-wrap items-center md:-mx-5">
                <div className="w-full md:w-1/2 md:px-5 mb-5 md:mb-0">
                  <img src="https://placedog.net/720/720" className="w-full" alt="Ben" />
                </div>
                <div className="w-full md:w-1/2 md:px-5">
                  <div className="w-full md:max-w-xl mx-auto content content--fancy">
                    <h2>Image &amp; Text Section</h2>

                    <p>Etiam arcu nisl, suscipit quis scelerisque ac, venenatis et felis. Curabitur cursus augue vitae laoreet interdum. Mauris cursus nec orci ut pellentesque. Pellentesque id congue turpis.</p>

                    <p>Aenean sit amet metus in diam molestie lobortis. In hac habitasse platea dictumst. Sed <a href="#">blandit id dolor</a> a convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt a sem in conseq. </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="mb-12 md:mb-20 xl:mb-32 overflow-hidden">
            <Container>
              <div className="flex flex-wrap md:-mx-5">
                <div className="w-full md:w-5/12 md:px-5 content content--fancy">
                  <h2 className="md:text-right md:max-w-lg ml-auto">Just Text Section Right Aligned Title</h2>
                </div>
                <div className="w-full md:w-7/12 md:px-5">
                  <div className="w-full max-w-2xl mx-auto content content--fancy">
                    <p>Etiam arcu nisl, suscipit quis scelerisque ac, venenatis et felis. Curabitur cursus augue vitae laoreet interdum. Mauris cursus nec orci ut pellentesque. Pellentesque id congue turpis.</p>

                    <p>Aenean sit amet metus in diam molestie lobortis. In hac habitasse platea dictumst. Sed <a href="#">blandit id dolor</a> a convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt a sem in conseq. </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="mb-12 md:mb-20 xl:mb-32 overflow-hidden">
            <Container>
              <img src="https://placedog.net/1600/480" className="w-full" alt="Ben" />
            </Container>
          </section>

          <section className="mb-12 md:mb-20 xl:mb-32 overflow-hidden">
            <Container>
              <div className="flex flex-wrap md:-mx-5">
                <div className="w-full md:w-8/12 xl:w-7/12 mx-auto content content--fancy">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum dictum elit varius porta. Fusce nec ipsum semper, bibendum massa a, rutrum felis. Aliquam purus dui, condimentum eget porttitor at, eleifend eget massa. Nulla vel pretium enim. Aenean tristique, velit vel pretium lacinia, magna sapien suscipit lorem, porta auctor massa massa in enim. Vestibulum interdum mollis quam non gravida. </p>

                  <p>Vivamus lobortis interdum nisi at feugiat. Fusce nec justo vel massa laoreet sodales et at diam. Phasellus pellentesque nunc eu risus pellentesque, vitae iaculis libero blandit. Nunc porttitor ante sit amet tellus tincidunt, tempor sodales purus consequat.</p>

                  <p>Nulla vestibulum semper enim at venenatis. Praesent tellus elit, ultrices nec orci eu, ultricies imperdiet dui. Morbi suscipit imperdiet diam eu convallis. Nam id sem sed magna accumsan aliquet.</p>

                  <p>In id fermentum lacus, quis dignissim sapien. Vivamus sodales dolor ac sem aliquam convallis. Suspendisse tincidunt rutrum urna, vel auctor tellus iaculis id. Donec non iaculis dolor. In porttitor gravida urna. In ultricies eu est non tempor. Ut pretium metus hendrerit erat molestie feugiat. Praesent lacus massa, pharetra non venenatis ac, ultricies sit amet risus. Etiam sodales pharetra mi.</p>
                </div>
              </div>
            </Container>
          </section>

          <section className="mb-6 md:mb-8 xl:mb-12">
            <Container>
              <hr className="border-b-1 border-purple border-opacity-10 mb-6 md:mb-16 xl:mb-16" />

              <div className="flex flex-wrap w-full">
                <Link href="/work">
                  <a className="ml-auto inline-block text-right group">
                    <span className="text-purple block">Next Project ⟶</span>
                    <span className="h2 transition ease-in-out duration-300 group-hover:text-purple group-focus:text-purple">Project Title</span>
                  </a>
                </Link>
              </div>
            </Container>

          </section>
          
          <Footer />
        </motion.div>
      </motion.div>
    </Layout>
  )
}
