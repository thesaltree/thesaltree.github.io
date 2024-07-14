import { createClient } from '@sanity/client';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-04',
    useCdn: false,
    token: process.env.SANITY_TOKEN,
});

export default client;
