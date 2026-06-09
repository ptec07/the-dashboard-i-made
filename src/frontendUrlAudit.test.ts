import { describe, expect, it } from 'vitest'

const frontendTitleExpectations = [
  ['Bus Realtime Webapp', 'https://bus-realtime-webapp.vercel.app', '실시간 버스정보'],
  ['주차될까', 'https://parking-availability-app.vercel.app', '주차될까'],
  ['오늘응급', 'https://oneul-emergency.vercel.app', '오늘응급'],
  ['Agent Control Messenger', 'https://agent-control-messenger-frontend.vercel.app', 'Agent Control Messenger'],
  ['Hermes Dashboard', 'https://my-hermes-dashboard.vercel.app/', 'Hermes Dashboard'],
  ['Hermes Daily Dashboard', 'https://hermes-daily-dashboard.vercel.app', 'Hermes Daily Dashboard'],
  ['법령나침반', 'https://beopryeong-nachimban.vercel.app/', '법령나침반'],
  ['SkyTrip', 'https://flight-booking-helper.vercel.app', 'SkyTrip'],
  ['RealRent', 'https://new-realrent.vercel.app/', 'RealRent 최신 실거래가'],
  ['Commute Helper', 'https://commute-helper.vercel.app', '출근도우미'],
  ['React Quest', 'https://react-quest-gray.vercel.app', 'react-quest'],
  ['Python Quest', 'https://python-quest-taupe.vercel.app', 'Python Quest'],
  ['TypeScript Quest', 'https://typescript-quest.vercel.app', 'TypeScript Quest'],
  ['Zig Learning Lab', 'https://zig-learning-lab.vercel.app/', 'Zig Learning Lab'],
  ['Markdown Blog Vercel', 'https://markdown-blog-vercel.vercel.app', 'Markdown Blog Studio'],
  ['HTML Vercel Blog', 'https://html-vercel-blog.vercel.app', 'HTML Blog on Vercel'],
  ['Stock Window Compare', 'https://stock-nine-psi.vercel.app', 'Stock Window Compare'],
] as const

async function fetchTitle(url: string) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Hermes dashboard URL audit test' },
  })
  const html = await response.text()
  const title = html.match(/<title[^>]*>(.*?)<\/title>/is)?.[1]?.replace(/\s+/g, ' ').trim()

  return {
    status: response.status,
    title,
  }
}

describe('dashboard frontend URL audit', () => {
  it.each(frontendTitleExpectations)('%s frontend URL serves the expected app title', async (_name, url, expectedTitle) => {
    const result = await fetchTitle(url)

    expect(result).toEqual({
      status: 200,
      title: expectedTitle,
    })
  }, 30_000)
})
