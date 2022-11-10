import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useState } from 'react'
import Login from './Login'

export default function Home() {
  // const {data: session } = useSession();


  return (
    <div className={styles.container}>
      <Head>
        <title>Apex Admin</title>
        <meta name="description" content="Admin Panel" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>

      <Login />
      {/* {session ? User({session}) : Guest()} */}

    </div>
  )
}


// function Guest() {
//   return (
//     <main className='container mx-auto text-center py-20'>
//       <h3 className='text-4xl font-bold'>Hello Guest</h3>

//       <div className='flex justify-center'>
//         <Link href='/Login' className='mt-5 px-10 py-1 rounded-sm bg-apexB'>Sign in</Link>
//       </div>
//     </main>
//   )
// }

// function User({ session }) {
//   return (
//     <main className='container mx-auto text-center py-20'>
//       <h3 className='text-4xl font-bold'>Hello Admin</h3>

//       <div className='flex justify-center'>
//         <Link href='/Login' className='mt-5 px-10 py-1 rounded-sm bg-apexB'>Sign in</Link>
//       </div>
//     </main>
//   )
// }


// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req })

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/Login',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: { session }
//   }
// }