import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';

const client = createClient({
    projectId: projectId,
    dataset: 'production',
    apiVersion: '2022-03-04',
    useCdn: false,
    token: process.env.SANITY_TOKEN,
});

export default client;

