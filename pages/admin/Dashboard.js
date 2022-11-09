import React from 'react'
import Navbar from '../../components/Navbar'
import ProviderTable from '../../components/ProviderTable'
import Shell from '../../components/Shell'
import { SupabaseClient } from '@supabase/supabase-js'
import supabase from '../../config/supabaseClient'

const Dashboard = () => {

  return (
    <div>
      {/* <Shell /> */}
      <Navbar />
      <ProviderTable />
    </div>
  )
}

export default Dashboard