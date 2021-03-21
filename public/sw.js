self.addEventListener('install', function () {
  console.log(' 🚨 Push Notification for {>event[]} ')
})

self.addEventListener('push', function (event) {
  const eventData = event.data.json()
  const data = typeof eventData === 'string' ? JSON.parse(eventData) : eventData
  const { message, username } = data

  const title = `message from ${username}`
  const options = {
    body: message,
    lang: 'en',
    icon: '/image192.png',
    image: '/image.png',
    sound: '/audio.mp3',
    // Sat Mar 20 07:40:15 PDT 2021
    timestamp: Date.parse('20 Mar 2021 00:00:00'),
    vibrate: [
      500,
      110,
      500,
      110,
      450,
      110,
      200,
      110,
      170,
      40,
      450,
      110,
      200,
      110,
      170,
      40,
      500,
    ],
  }

  if ('actions' in Notification.prototype) {
    options.actions = [
      {
        action: 'swap-action',
        title: 'Swap Pool',
        icon: '/action1.png',
      },
      {
        action: 'doughnut-action',
        title: 'Flashbots Merge',
        icon: '/flashbots.png',
      },
    ]
  }

  const promiseChain = self.registration.showNotification(title, options)
  event.waitUntil(promiseChain)
})
