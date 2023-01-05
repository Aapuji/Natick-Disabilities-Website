import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Events.module.css'
import { Inter } from '@next/font/google' //dysfunctional with compiler

export default function Events() {
  return <>
<div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={Inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={Inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={Inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={Inter.className}>
              Learn about Next.js in an Interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={Inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={Inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={Inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={Inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
  </>;
}