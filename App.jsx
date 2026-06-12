import { fmt, fmtPct } from '../utils'
import { CDBS, TOTAL } from '../constants'

export default function TabComposicao({ meses }) {
  const lastMes = meses[meses.length - 1]
  const lastCdi = lastMes ? lastMes.cdi_pct / 100 : null

  let totalRend = 0
  const rows = CDBS.map(c => {
    const rendMes = lastCdi != null ? c.valor * c.taxa * lastCdi : null
    if (rendMes != null) totalRend += rendMes
    return { ...c, rendMes }
  })

  return (
    <div className="card">
      <div className="card-title">CDBs que compõem o lastro</div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ativo</th>
              <th>Emissor</th>
              <th>Vencimento</th>
              <th className="text-right">Taxa</th>
              <th className="text-right">% Aloc.</th>
              <th className="text-right">Valor alocado</th>
              <th className="text-right">Rend. último mês</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c, i) => (
              <tr key={i}>
                <td>{c.nome}</td>
                <td>{c.emissor}</td>
                <td>{new Date(c.venc).toLocaleDateString('pt-BR')}</td>
                <td className="text-right">
                  <span className={`badge ${c.taxa > 1 ? 'badge-green' : 'badge-blue'}`}>
                    {(c.taxa * 100).toFixed(0)}% CDI
                  </span>
                </td>
                <td className="text-right">{fmtPct(c.peso * 100, 1)}</td>
                <td className="text-right">{fmt(c.valor)}</td>
                <td className="text-right green">{c.rendMes != null ? fmt(c.rendMes) : '—'}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="tr-total">
              <td colSpan={4}>Total</td>
              <td className="text-right">100,0%</td>
              <td className="text-right">{fmt(TOTAL)}</td>
              <td className="text-right green">{lastCdi != null ? fmt(totalRend) : '—'}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
