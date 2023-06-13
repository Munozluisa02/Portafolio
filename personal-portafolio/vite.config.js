import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    replace({
      'process.env': JSON.stringify({
        REACT_APP_MAILCHIMP_URL: process.env.REACT_APP_MAILCHIMP_URL,
        REACT_APP_MAILCHIMP_U: process.env.REACT_APP_MAILCHIMP_U,
        REACT_APP_MAILCHIMP_ID: process.env.REACT_APP_MAILCHIMP_ID
      })
    })
  ],
  define:{
    'process.env': process.env
  },
})
