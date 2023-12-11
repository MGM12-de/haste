import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data } = await client.from('teams').select('*')
  
    return { teams: data }
  })
  