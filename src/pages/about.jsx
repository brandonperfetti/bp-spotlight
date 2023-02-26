import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon, LinkedInIcon,
  TwitterIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Brandon Perfetti</title>
        <meta
          name="description"
          content="I’m Brandon Perfetti. I'm from Orange County, CA, where I live the dream."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="space-y-4 lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey there! 👋<br></br>I’m Brandon Perfetti.<br></br>
            </h1>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              I'm from Orange County CA, where I'm living the dream.
            </h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I'm one of those imposters who has found himself lucky enough to
                have fallen into the wonderful world of web development.
                <span aria-label="wink">😉</span>
              </p>
              <p>
                I've worked in real estate technology for the past 10 years.
                Honing my skills and hustling my way from answering support
                emails out of a gmail inbox, to designing custom reports w/ real
                estate brokers nationwide, to Senior Data Services Engineer at
                W+R Studios; hurdled through acquisition all the way to Front
                End Engineer at Lone Wolf Technologies.{" "}
                <span aria-label="rocket">🚀</span>
              </p>
              <p>
                In my tenure I've managed data integration to and from third
                parties (Multiple Listing Services, Brokers, and Data Partners)
                nationwide and mapped said data to be schematized and output via
                a GraphQL API to a suite of real estate agent facing SaaS
                products. <span aria-label="coder">👨‍💻</span>
              </p>
              <p>
                This encompasses building/maintaining RETS, Web API, and SSO
                (SAML / JWT) integrations while working closely with the
                technical teams of thrid party partners to ensure smooth
                operation, security, and data integrity. <span aria-label='hammer and wrench'>🛠️</span>
              </p>
              <p>
                This includes daily management of 250+ individual data feeds
                (120M Listing Records, 12M Agent Records, ~500K daily updates),
                leading QA of each new integration (schedule, plan, meet launch
                dates), and finding solutions to problems that don't have
                answers. <span aria-label="monacle">🧐</span>
              </p>
              <p>
                One of those problems surfaced as a need to refactor the front
                end Data Pipeline ingestion tool I had been using over the years
                to serve real estate data to a suite of products with intent to
                expand support to 6 new applications and teams.{" "}
                <span aria-label="mucsle">💪</span>
              </p>
              <p>
                I leveraged the battle hardened knowlege cultivated alongside a
                quest to level up my front end skills and refactored the entire
                front end in a new architecture (introduced Typescript,
                TailwindCSS, React Router, React Query and upgraded to React
                18); resulting in 5x data feed integration speeds and an
                abundance of adoption in all levels of the organization
                (support, sales, accounting, and development).
              </p>
              <p>
                In doing so, I've shifted into a Front End Engineering role
                where I drive innovation though focused UI/UX planning and
                execution. It's been quite the journey, and I wouldn't change a
                thing. <span aria-label="grin">😁</span>
              </p>
            </div>
            <div>
              <div className="py-4">
                <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                  Solutions
                </h3>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  With a career born in finding solutions to problems that don't
                  have answers, I've honed a specified skillset for
                  troubleshooting any and all software and hardware issues. I
                  identify negative feedback loops and transform them into
                  positive feedback loops by leveraging logic and deduction. My
                  processes will isolate the root cause of a given problem and
                  allow multiple scenarios for resolution.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                  Enterprise Client + Project Management
                </h3>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Effective communication and time management lead to prosperous
                  projects and happy clients. Under promise and over deliver. I
                  set the table and lead the client down the project path that
                  works best for their specific situation. Maleability and
                  finesse are leveraged to deliver a client experience that is
                  specifically attuned to their needs, wants, and desires.
                </p>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                  Development
                </h3>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I'm a hyper focused technologist with a multidisciplinary
                  skill set honed over 10+ years of experience in various
                  industries. I assist software teams in product inception,
                  pragmatic execution, and painless rollout. I craft scalable
                  solutions, implement internal processes tailored to your
                  organization, and develop teams that produce results.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/brandonperfetti"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/brandonperfetti"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/brandonperfetti/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:brandon@brandonperfetti.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                brandon@brandonperfetti.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
