/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { ThemeProvider } from '@/components/theme-provider'

const appName = import.meta.env.VITE_APP_NAME || 'MXGR'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: () => appName,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App {...props} />
      </ThemeProvider>
    )
  },
})
