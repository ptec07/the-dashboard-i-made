import { render, screen, within } from '@testing-library/react'
import App from './App'

function renderDashboard() {
  render(<App />)
}

describe('The dashboard I made', () => {
  it('renders a clear dashboard title, summary metrics, and search box', () => {
    renderDashboard()

    expect(screen.getByRole('heading', { name: /The dashboard I made/i })).toBeInTheDocument()
    expect(screen.getByText(/Hermes로 만든 웹앱들을 한눈에 정리한 대시보드/i)).toBeInTheDocument()
    expect(screen.getAllByText('11').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/총 웹앱/i)).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: /웹앱 검색/i })).toBeInTheDocument()
  })

  it('shows every app with frontend, backend, and GitHub links where available', () => {
    renderDashboard()

    const table = screen.getByRole('table', { name: /웹앱 URL 목록/i })
    expect(within(table).getByRole('columnheader', { name: /프론트/i })).toBeInTheDocument()
    expect(within(table).getByRole('columnheader', { name: /백엔드/i })).toBeInTheDocument()
    expect(within(table).getByRole('columnheader', { name: /GitHub/i })).toBeInTheDocument()

    expect(within(table).getByRole('row', { name: /주차될까/i })).toHaveTextContent('parking-availability-app.vercel.app')
    expect(within(table).getByRole('row', { name: /오늘응급/i })).toHaveTextContent('oneul-emergency-api.onrender.com')
    expect(within(table).getByRole('row', { name: /Agent Control Messenger/i })).toHaveTextContent('agent-control-messenger-backend-git.onrender.com')
    expect(within(table).getByRole('row', { name: /RealRent/i })).toHaveTextContent('realrent-backend.onrender.com')
    expect(within(table).getByRole('row', { name: /Commute Helper/i })).toHaveTextContent('로컬')
    expect(within(table).getByRole('row', { name: /TypeScript Quest/i })).toHaveTextContent('준비 중')

    expect(within(table).getByRole('link', { name: /React Quest GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/ptec07/react-quest',
    )
  })
})
