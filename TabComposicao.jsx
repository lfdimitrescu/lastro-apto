import { useState } from 'react'
import { sb } from '../supabase'

export default function ModalMes({ onClose, onSaved }) {
  const hoje = new Date()
  const defaultMes = hoje.getFullYear() + '-' + String(hoje.getMonth() + 1).padStart(2, '0')

  const [mes, setMes] = useState(defaultMes)
  const [cdi, setCdi] = useState('')
  const [ipca, setIpca] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSave = async e => {
    e.preventDefault()
    setError('')
    if (!mes || cdi === '' || ipca === '') { setError('Preencha todos os campos.'); return }
    setLoading(true)
    const { error } = await sb.from('lastro_meses').upsert(
      { mes, cdi_pct: parseFloat(cdi), ipca_pct: parseFloat(ipca) },
      { onConflict: 'mes' }
    )
    if (error) { setError('Erro ao salvar: ' + error.message); setLoading(false); return }
    setLoading(false)
    onSaved()
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <h3>Inserir dados do mês</h3>
        <form onSubmit={handleSave}>
          <div className="modal-field">
            <label>Mês de referência</label>
            <input type="month" value={mes} onChange={e => setMes(e.target.value)} />
          </div>
          <div className="modal-field">
            <label>CDI do mês (%) — ex: 1.070</label>
            <input
              type="number" step="0.001" min="0"
              value={cdi} onChange={e => setCdi(e.target.value)}
              placeholder="1.070"
            />
          </div>
          <div className="modal-field">
            <label>IPCA do mês (%) — ex: 0.500</label>
            <input
              type="number" step="0.001" min="0"
              value={ipca} onChange={e => setIpca(e.target.value)}
              placeholder="0.500"
            />
          </div>
          <p className="modal-hint">
            Consulte o CDI em{' '}
            <a href="https://www.bcb.gov.br/htms/selic/selicmes.asp" target="_blank" rel="noreferrer">bcb.gov.br</a>
            {' '}e o IPCA em{' '}
            <a href="https://www.ibge.gov.br/explica/inflacao.php" target="_blank" rel="noreferrer">ibge.gov.br</a>
          </p>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-save" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
          {error && <div className="auth-error">{error}</div>}
        </form>
      </div>
    </div>
  )
}
