import './App.css'

type AppStatus = '운영 중' | '로컬' | '준비 중' | '점검 필요'

type DashboardApp = {
  name: string
  description: string
  category: string
  status: AppStatus
  frontend?: string
  backend?: string
  github: string
  note?: string
}

const apps: DashboardApp[] = [
  {
    name: 'Bus Realtime Webapp',
    description: '경기도 버스 노선·정류장 실시간 도착정보 조회 웹앱',
    category: '교통',
    status: '운영 중',
    frontend: 'https://bus-realtime-webapp.vercel.app',
    backend: 'https://bus-realtime-webapp.onrender.com',
    github: 'https://github.com/ptec07/bus-realtime-webapp',
  },
  {
    name: '주차될까',
    description: '서울 공영주차장 실시간 데이터 기반 주차 가능성 PWA',
    category: '생활',
    status: '운영 중',
    frontend: 'https://parking-availability-app.vercel.app',
    backend: 'https://parking-availability-app.vercel.app/api/parking-lots',
    github: 'https://github.com/ptec07/parking-availability-app',
    note: 'Vercel same-origin API fallback 운영',
  },
  {
    name: '오늘응급',
    description: '응급실·야간/주말 약국을 빠르게 찾는 생활 안전 PWA',
    category: '응급',
    status: '운영 중',
    frontend: 'https://frontend-delta-coral-90.vercel.app',
    backend: 'https://oneul-emergency-api.onrender.com/api/health',
    github: 'https://github.com/ptec07/oneul-emergency',
  },
  {
    name: 'Agent Control Messenger',
    description: '에이전트 작업 승인·스레드 관제를 위한 메신저 프로토타입',
    category: '에이전트',
    status: '운영 중',
    frontend: 'https://agent-control-messenger-frontend.vercel.app',
    backend: 'https://agent-control-messenger-backend-git.onrender.com',
    github: 'https://github.com/ptec07/agent-control-messenger',
  },
  {
    name: 'RealRent',
    description: '서울·수도권 전월세 실거래가 검색·비교 MVP',
    category: '부동산',
    status: '운영 중',
    frontend: 'https://realrent-hazel.vercel.app',
    backend: 'https://realrent-backend.onrender.com/health',
    github: 'https://github.com/ptec07/realrent',
  },
  {
    name: 'Commute Helper',
    description: '서울 직장인을 위한 통근 출발 판단 MVP',
    category: '교통',
    status: '로컬',
    frontend: '로컬: frontend Vite',
    backend: '로컬: FastAPI http://localhost:8000',
    github: 'https://github.com/ptec07/commute-helper',
  },
  {
    name: 'React Quest',
    description: 'ko.react.dev 흐름을 따라가는 React 한국어 학습 웹앱',
    category: '학습',
    status: '운영 중',
    frontend: 'https://react-quest-gray.vercel.app',
    backend: '정적 SPA',
    github: 'https://github.com/ptec07/react-quest',
  },
  {
    name: 'Python Quest',
    description: 'Python 공식 튜토리얼 흐름을 따라가는 한국어 학습 퀘스트 앱',
    category: '학습',
    status: '운영 중',
    frontend: 'https://python-quest-taupe.vercel.app',
    backend: 'https://docs.python.org/ko/3/',
    github: 'https://github.com/ptec07/python-quest',
    note: '정적 SPA · Python 공식 문서 기반',
  },
  {
    name: 'TypeScript Quest',
    description: 'TypeScript 공식 핸드북 흐름을 따라가는 한국어 학습 퀘스트 앱',
    category: '학습',
    status: '운영 중',
    frontend: 'https://typescript-quest.vercel.app',
    backend: 'https://typescript-kr.github.io/',
    github: 'https://github.com/ptec07/typescript-quest',
    note: '정적 SPA · TypeScript 공식/한국어 문서 기반',
  },
  {
    name: 'Markdown Blog Vercel',
    description: 'Markdown 기반 Vercel/Next.js 블로그',
    category: '콘텐츠',
    status: '운영 중',
    frontend: 'https://markdown-blog-vercel.vercel.app',
    backend: 'Next.js',
    github: 'https://github.com/ptec07/markdown-blog-vercel',
  },
  {
    name: 'HTML Vercel Blog',
    description: '!tbg 글 변환 흐름에 연결된 HTML/Next.js 블로그',
    category: '콘텐츠',
    status: '운영 중',
    frontend: 'https://html-vercel-blog.vercel.app',
    backend: 'Next.js',
    github: 'https://github.com/ptec07/html-vercel-blog',
  },
  {
    name: 'Stock Window Compare',
    description: '회사명·날짜 기준 전후 주가 구간 비교 웹앱',
    category: '금융',
    status: '운영 중',
    frontend: 'https://stock-nine-psi.vercel.app',
    backend: 'https://stock-window-compare.onrender.com',
    github: 'https://github.com/ptec07/testStock',
  },
]

const deployedCount = apps.filter((app) => app.status === '운영 중').length
const backendCount = apps.filter((app) => app.backend && !app.backend.includes('정적')).length
const githubCount = apps.filter((app) => app.github).length

function LinkOrText({ value, label }: { value?: string; label: string }) {
  if (!value) return <span className="muted">없음</span>
  if (!value.startsWith('http')) return <span>{value}</span>

  const displayUrl = value.replace(/^https?:\/\//, '').replace(/\/$/, '')
  return (
    <a href={value} target="_blank" rel="noreferrer" aria-label={label}>
      {displayUrl}
    </a>
  )
}

function App() {
  return (
    <main className="dashboard-shell">
      <section className="hero-panel" aria-labelledby="dashboard-title">
        <div>
          <p className="eyebrow">Hermes Web App Portfolio</p>
          <h1 id="dashboard-title">The dashboard I made</h1>
          <p className="hero-copy">
            Hermes로 만든 웹앱들을 한눈에 정리한 대시보드입니다. 프론트, 백엔드,
            GitHub URL을 보기 좋게 모아 관리 상태를 빠르게 확인할 수 있습니다.
          </p>
        </div>
        <div className="hero-card" aria-label="대시보드 요약">
          <span className="hero-card-number">{apps.length}</span>
          <span>tracked apps</span>
        </div>
      </section>

      <section className="metrics" aria-label="요약 지표">
        <article>
          <strong>{apps.length}</strong>
          <span>총 웹앱</span>
        </article>
        <article>
          <strong>{deployedCount}</strong>
          <span>운영 URL 확인</span>
        </article>
        <article>
          <strong>{backendCount}</strong>
          <span>백엔드/API 항목</span>
        </article>
        <article>
          <strong>{githubCount}</strong>
          <span>GitHub 연결</span>
        </article>
      </section>

      <section className="toolbar" aria-label="조회 도구">
        <label>
          <span>웹앱 검색</span>
          <input type="search" aria-label="웹앱 검색" placeholder="이름, 분야, URL로 빠르게 찾기" />
        </label>
        <p>깔끔한 읽기 전용 인벤토리 · 최근 확인 기준</p>
      </section>

      <section className="table-section">
        <div className="section-heading">
          <p className="eyebrow">URL Inventory</p>
          <h2>프론트 · 백엔드 · GitHub 목록</h2>
        </div>
        <div className="table-wrap">
          <table aria-label="웹앱 URL 목록">
            <thead>
              <tr>
                <th scope="col">웹앱</th>
                <th scope="col">상태</th>
                <th scope="col">프론트</th>
                <th scope="col">백엔드</th>
                <th scope="col">GitHub</th>
                <th scope="col">메모</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr key={app.name}>
                  <th scope="row">
                    <span className="app-name">{app.name}</span>
                    <span className="app-desc">{app.description}</span>
                  </th>
                  <td>
                    <span className={`status status-${app.status.replaceAll(' ', '-')}`}>{app.status}</span>
                  </td>
                  <td>
                    <LinkOrText value={app.frontend} label={`${app.name} 프론트`} />
                  </td>
                  <td>
                    <LinkOrText value={app.backend} label={`${app.name} 백엔드`} />
                  </td>
                  <td>
                    <LinkOrText value={app.github} label={`${app.name} GitHub`} />
                  </td>
                  <td>{app.note ?? app.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default App
