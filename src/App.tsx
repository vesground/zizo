import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Home from './pages/Home'

import './styles/App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
