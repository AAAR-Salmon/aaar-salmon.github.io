import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import style from './index.module.sass'

const Home: React.VFC = () => {
  return (
    <Layout>
      <section className="spNone">
        <div className={style.brandingArea}>
          <div>
            <Image
              src="/images/salmon-logo.svg"
              width={160}
              height={160}
            />
          </div>
          <div className={style.brandingText}>
            <h1 className={style.headingWithLine}>AAAR Salmon</h1>
            <p>しがない学生、終に鮭のホームページです</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
