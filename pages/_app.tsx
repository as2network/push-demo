/**
 * @file _app
 * @summary checks for service worker registration success
 */
import { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log(
              '✅ Service Worker registration successful with scope: ',
              registration.scope
            )
          },
          function (err) {
            console.log(' 🆘 Service Worker registration failed: ', err)
          }
        )
      })
    }
  }, [])

  return <Component {...pageProps} />
}
