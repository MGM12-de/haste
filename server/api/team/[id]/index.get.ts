import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const teamId = event.context.params?.id || '';

    const { data } = await client.from('teams').select('*').eq('id', teamId).single();

    return data
})
