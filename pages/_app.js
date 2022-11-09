import '../styles/globals.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SupabaseClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router'
import supabase from '../config/supabaseClient';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <>
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
    </>
  )
}

export default MyApp
