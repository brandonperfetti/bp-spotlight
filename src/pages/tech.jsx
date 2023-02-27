import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoGatsby from '@/images/logos/gatsby.svg'
import logoGraphQL from '@/images/logos/graphql.svg'
import logoHeadlessUI from '@/images/logos/headless-ui.svg'
import logoJavaScript from '@/images/logos/javascript.svg'
import logoKeystone from '@/images/logos/keystone.svg'
import logoMongoDB from '@/images/logos/mongo-db.svg'
import logoNetlify from '@/images/logos/netlify.svg'
import logoNext from '@/images/logos/next.svg'
import logoNode from '@/images/logos/node.svg'
import logoNpm from '@/images/logos/npm.svg'
import logoReactQuery from '@/images/logos/react-query.svg'
import logoReactRouter from '@/images/logos/react-router.svg'
import logoReact from '@/images/logos/react.svg'
import logoRemix from '@/images/logos/remix.svg'
import logoSupabase from '@/images/logos/supabase.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoTypeScript from '@/images/logos/typescript.svg'
import logoVercel from '@/images/logos/vercel.svg'
import logoVite from '@/images/logos/vite.svg'
import logoYarn from '@/images/logos/yarn.svg'

const techStack = [
  {
    name: 'JavaScript',
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
    link: {
      href: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
      label: 'JavaScript Docs'
    },
    logo: logoJavaScript
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    link: {
      href: 'https://www.typescriptlang.org/',
      label: 'typescriptlang.org'
    },
    logo: logoTypeScript
  },
  {
    name: 'Node.js',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    link: {
      href: 'https://nodejs.org/en/',
      label: 'nodejs.org/en'
    },
    logo: logoNode
  },
  {
    name: 'React',
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on components. ',
    link: {
      href: 'https://reactjs.org/',
      label: 'reactjs.org'
    },
    logo: logoReact
  },
  {
    name: 'Next.js',
    description: `Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.`,
    link: {
      href: 'https://nextjs.org/',
      label: 'nextjs.org'
    },
    logo: logoNext
  },
  {
    name: 'Vite',
    description: `Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR). A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.`,
    link: {
      href: 'https://vitejs.dev/',
      label: 'vitejs.dev'
    },
    logo: logoVite
  },
  {
    name: 'Remix',
    description:
      'Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.',
    link: {
      href: 'https://remix.run/',
      label: 'remix.run'
    },
    logo: logoRemix
  },
  {
    name: 'Gatsby',
    description:
      'Gatsby enables developers to build fast, secure, and powerful websites using a React-based framework and innovative data layer that makes integrating different content, APIs, and services into one web experience incredibly simple.',
    link: {
      href: 'https://www.gatsbyjs.com/',
      label: 'gatsbyjs.com'
    },
    logo: logoGatsby
  },
  {
    name: 'NPM',
    description: `npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.`,
    link: {
      href: 'https://www.npmjs.com/',
      label: 'npmjs.com'
    },
    logo: logoNpm
  },
  {
    name: 'Yarn',
    description: `Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.`,
    link: {
      href: 'https://yarnpkg.com/',
      label: 'yarnpkg.com'
    },
    logo: logoYarn
  },
  {
    name: 'GraphQL',
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.',
    link: {
      href: 'https://graphql.org/',
      label: 'graphql.org'
    },
    logo: logoGraphQL
  },
  {
    name: 'React Query',
    description:
      'Fetch, cache and update data in your React and React Native applications all without touching any "global state".',
    link: {
      href: 'https://react-query-v3.tanstack.com/',
      label: 'react-query-v3.tanstack.com'
    },
    logo: logoReactQuery
  },
  {
    name: 'React Router',
    description: `React Router enables "client side routing". Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.`,
    link: {
      href: 'https://reactrouter.com/en/main',
      label: 'reactrouter.com/en/main/'
    },
    logo: logoReactRouter
  },
  {
    name: 'Tailwind CSS',
    description:
      'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.',
    link: {
      href: 'https://tailwindcss.com/',
      label: 'tailwindcss.com'
    },
    logo: logoTailwind
  },
  {
    name: 'Tailwind UI',
    description:
      'Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.',
    link: {
      href: 'https://tailwindui.com/',
      label: 'tailwindui.com'
    },
    logo: logoTailwind
  },
  {
    name: 'Headless UI',
    description:
      'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
    link: {
      href: 'https://headlessui.com/',
      label: 'headlessui.com'
    },
    logo: logoHeadlessUI
  },
  {
    name: 'Keystone.js',
    description: `Keystone helps you build faster and scale further than any other CMS or App Framework. Just describe your schema, and get a powerful GraphQL API & beautiful Management UI for content and data.`,
    link: {
      href: 'https://keystonejs.com/',
      label: 'keystonejs.com'
    },
    logo: logoKeystone
  },
  {
    name: 'MongoDB Atlas',
    description: `The multi-cloud developer data platform.
An integrated suite of cloud database and data services to accelerate and simplify how you build with data.`,
    link: {
      href: 'https://www.mongodb.com/atlas',
      label: 'mongodb.com/atlas'
    },
    logo: logoMongoDB
  },
  {
    name: 'Supabase',
    description: `Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, and Storage.`,
    link: {
      href: 'https://supabase.com/',
      label: 'supabase.com'
    },
    logo: logoSupabase
  },
  {
    name: 'Netlify',
    description:
      'Netlify is a global, production-ready environment from the start. Skip all the server setup and get straight to building.',
    link: {
      href: 'https://www.netlify.com/',
      label: 'netlify.com'
    },
    logo: logoNetlify
  },
  {
    name: 'Vercel',
    description:
      'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.',
    link: {
      href: 'https://vercel.com/',
      label: 'vercel.com'
    },
    logo: logoVercel
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function TechStack() {
  return (
    <>
      <Head>
        <title>Tech Stack - Brandon Perfetti</title>
        <meta
          name="description"
          content="A blacksmith is nothing without his tools."
        />
      </Head>
      <SimpleLayout
        title="A blacksmith is nothing without his tools."
        intro="Each project demands a unique mixture of Browser, Programming Language, Framework, Database, Web Server, and Operating System. I've grown accustom to reaching for these technologies first.">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <Card as="li" key={tech.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={tech.logo} alt="" className="h-8 w-8" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={tech.link.href}>{tech.name}</Card.Link>
              </h2>
              <Card.Description>{tech.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{tech.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
