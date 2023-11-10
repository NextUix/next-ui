'use client'
import Link from 'next/link'
import useCopy from '~/hooks/useCopy'
import { ComponentList } from '~/routes/routes'
import { ArrowUpRight, Check, Clipboard } from 'phosphor-react'
import Image from 'next/image'
import { Accordion } from '~/src'

export default function Home() {
  return (
    <section className="home -mt-1 space-y-20 first:pt-20 last:pb-20 lg:space-y-32">
      <Hero />
      <ComponentUI />
      <FAQ />
      <Community />
    </section>
  )
}

const ComponentUI = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[700px] left-0 right-0 z-[-1] mx-auto hidden max-w-[1202px] lg:block">
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/60f7593e-eb13-48b7-8647-d7846dbdc16d_gradient-bg.svg"
          alt="gradient"
          height={1400}
          width={1280}
        />
      </div>
      <div className="container">
        <div className="mx-auto mb-4 px-5 text-center md:max-w-[500px] md:px-0">
          <h2 className="mb-2 text-4xl font-semibold leading-8 tracking-[-1px] text-black lg:text-8xl lg:!leading-[44px]">
            Design Excellence with Our React Component Library
          </h2>
          <p className="text-center text-sm font-normal leading-6 text-slate-600 md:text-base">
            Explore our library of 40+ open-source React UI components and interactive elements, empowering you to
            create stunning web projects effortlessly.
          </p>
        </div>
        <div className="my-14 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {ComponentList.map((item) => {
            return (
              <div
                key={item.id}
                className={`group relative flex h-[244px] w-full cursor-pointer items-center justify-center rounded-2xl border border-slate-200 bg-white/10 backdrop-blur-sm md:border-slate-100`}>
                {item.component()}
                <Link
                  href={item.href}
                  className="invisible absolute bottom-2 right-2 translate-y-1 rounded-md bg-slate-900 p-1 text-white transition-all duration-300 group-hover:visible group-hover:translate-y-0">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/docs/getting-started/Introduction"
            className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-25 px-6 py-3 text-sm text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white md:text-base">
            View All Component
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}

const Community = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-start justify-between gap-5 rounded-md bg-[url('https://staticmania.cdn.prismic.io/staticmania/59c3bc39-d8bc-4382-80e9-db3c7f10230d_community.svg')] bg-cover bg-center bg-no-repeat p-8 md:px-8 md:py-10 lg:flex-row lg:items-center lg:gap-0 lg:px-28 lg:py-12">
        <div>
          <h3 className="text-4xl font-semibold leading-[50px] tracking-[-1px] text-white md:text-5xl lg:text-8xl">
            Join the community
          </h3>
          <p className="max-w-sm text-sm font-normal text-white md:text-base">
            Become a member of a community of developers by supporting Keep React
          </p>
        </div>
        <div>
          <a
            href="https://github.com/NextUix"
            target="_blank"
            className="flex items-center gap-2 rounded-md  bg-slate-900 px-6 py-3 text-sm text-white hover:bg-slate-800 md:text-base">
            See Github Repository
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  const { copy, copyToClipboard } = useCopy()
  return (
    <div className="hero-area">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="mb-3 text-8xl font-semibold leading-10 tracking-[-1.75px] text-black/100 lg:text-[56px] lg:leading-[66px]">
          Supercharge Your Web Development with
          <span className="hero-text block">Keep React</span>
        </h1>
        <p className="mx-auto max-w-lg text-sm text-slate-600 md:text-lg">
          Unlocking the Power of Code to Transform Your Ideas into Stunning Web Realities.
        </p>
        <div className="mt-8 flex items-center justify-center gap-5">
          <div className="flex items-center justify-between gap-5 divide-x-2 divide-slate-100 rounded-md bg-white px-4 py-3">
            <p className="text-sm font-normal leading-[22px] tracking-[-0.3px] text-slate-500">
              npm install keep-react
            </p>
            <button className="pl-2" onClick={() => copyToClipboard('npm install keep-react')}>
              {copy ? <Check size={18} color="#8897AE" /> : <Clipboard size={18} color="#8897AE" />}
            </button>
          </div>
          <Link
            href="/docs/getting-started/Introduction"
            className="group h-min w-fit justify-center rounded-md border border-slate-900  bg-slate-900 px-4 py-2.5 text-center text-sm font-medium capitalize text-white transition-all duration-75 ease-in hover:bg-slate-800 focus:ring-4 focus:ring-slate-800 active:bg-slate-900">
            Get Started
          </Link>
        </div>
      </div>

      <div className="relative -z-0 -mt-20 hidden items-center justify-center lg:flex">
        <Image src="/images/hero.png" alt="hero" height={720} width={1400} />
      </div>
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is Keep React?',
      answer:
        'Keep React is an open-source component library built on React and Tailwind CSS. It offers a collection of pre-designed UI components and styles that you can easily integrate into your web applications.',
    },
    {
      id: 2,
      question: 'How can I use Keep React components?',
      answer:
        'To use Keep React components, you can install the library via npm or yarn, import the components you need in your React application, and start using them in your code.',
    },
    {
      id: 3,
      question: 'Is Keep React compatible with other React projects?',
      answer:
        'Yes, Keep React is designed to be compatible with other React projects. You can seamlessly integrate its components into your existing React applications.',
    },
    {
      id: 4,
      question: 'What makes Keep React different from other component libraries?',
      answer:
        'Keep React combines the power of React with the flexibility and utility of Tailwind CSS. It provides a wide range of customizable components to help you build beautiful, responsive, and functional user interfaces.',
    },
    {
      id: 5,
      question: 'Can I customize the styling of Keep React components?',
      answer:
        "Yes, Keep React components are highly customizable. You can use Tailwind CSS utility classes or even create your own styles to tailor the appearance of the components to your project's needs.",
    },
    {
      id: 6,
      question: 'Is Keep React suitable for both small and large-scale applications?',
      answer:
        'Absolutely! Keep React is designed to be versatile, making it suitable for a wide range of projects, from small personal websites to large-scale applications. Its components and styles are designed to scale to your needs.',
    },
  ]

  return (
    <div className="container">
      <div className="mx-auto mb-4 px-5 text-center md:max-w-[500px] md:px-0">
        <h2 className="mb-2 text-4xl font-semibold leading-8 tracking-[-1px] text-black lg:text-8xl lg:!leading-[44px]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-12 block w-full xl:hidden">
        <Accordion collapseAll={true} flush>
          {faqs.map((faq) => (
            <Accordion.Panel key={faq.id}>
              <Accordion.Title>{faq.question}</Accordion.Title>
              <Accordion.Content>
                <p>{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
      <div className="mt-12 hidden grid-cols-1 gap-5 xl:grid xl:grid-cols-2">
        <div className="w-full xl:col-span-1">
          <Accordion collapseAll={true} flush>
            {faqs.slice(0, 3).map((faq) => (
              <Accordion.Panel key={faq.id}>
                <Accordion.Title>{faq.question}</Accordion.Title>
                <Accordion.Content>
                  <p>{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
        <div className="w-full xl:col-span-1">
          <Accordion collapseAll={true} flush>
            {faqs.slice(3, 6).map((faq) => (
              <Accordion.Panel key={faq.id}>
                <Accordion.Title>{faq.question}</Accordion.Title>
                <Accordion.Content>
                  <p>{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
