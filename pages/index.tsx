import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const Home: React.VFC = () => {
  const links = [
    'building-kyopro-environment/python'
  ]
  return (
    <Layout>
      <ul>
        {links.map(link => (
          <li key={link}>
            <Link href={link}>
              <a>{link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Home
