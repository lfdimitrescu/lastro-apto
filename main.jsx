import { useState, useEffect } from 'react'
import { sb } from './supabase'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    sb.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: { subscription } } = sb.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [])

  if (session === undefined) return <div className="loading" style={{marginTop:'20vh'}}>Carregando...</div>
  if (!session) return <Login />
  return <Dashboard session={session} />
}
