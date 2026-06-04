import { createClient } from 'microcms-js-sdk';

export type Cases = {
  id: string;
  title: string;
  responsibility: string;
  year: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  url?: string;
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});
