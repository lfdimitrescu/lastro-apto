import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { fmt, fmtPct, mesFmt } from '../utils'
import { CDBS, PGTO_MENSAL, TOTAL } from '../constants'

export default function TabHistorico({ meses, onDelete }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  const rows = buildRows(meses)

  useEffect(() => {
    if (!meses.length) return
    if (chartInstance.current) chartInstance.current.destroy()

    const labels = rows.map(r => mesFmt(r.mes))
    const rendAcums = rows.map(r => Math.round(r.rendAcum))
    const pgtoAcums = rows.map(r => Math.round(r.pgtoAcum))
    const ipcaVals = (() => {
      let acc = 1
      return meses.map(m => { acc *= (1 + m.ipca_pct / 100); return Math.round(TOTAL * (acc - 1)) })
    })()

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Rendimento bruto', data: rendAcums, backgroundColor: '#1D9E75', order: 3 },
          { label: 'IPCA (R$)', data: ipcaVals, backgroundColor: 'rgba(186,117,23,0.25)', borderColor: '#BA7517', borderWidth: 1, order: 2 },
          { label: 'Pagamentos', data: pgtoAcums, type: 'line', borderColor: '#E24B4A', borderWidth: 2, borderDash: [4, 3], pointRadius: 3, pointBackgroundColor: '#E24B4A', fill: false, order: 1 },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { font: { size: 11 }, color: '#888', autoSkip: false, maxRotation: 45 }, grid: { display: false } },
          y: { ticks: { font: { size: 11 }, color: '#888', callback: v => 'R$ ' + (v / 1000).toFixed(0) + 'k' }, grid: { color: 'rgba(128,128,128,0.08)' } },
        },
      },
    })
    return () => chartInstance.current?.destroy()
  }, [meses])

  if (!meses.length) return (
    <div className="card">
      <div className="loading">Nenhum mês inserido ainda. Clique em "Inserir mês" para começar.</div>
    </div>
  )

  return (
    <>
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Evolução acumulada</div>
        <div className="chart-wrap">
          <canvas ref={chartRef} role="img" aria-label="Evolução do rendimento acumulado vs pagamentos" />
        </div>
        <div className="chart-legend">
          <span className="legend-item"><span className="legend-dot" style={{ background: '#1D9E75' }} />Rendimento bruto acum.</span>
          <span className="legend-item"><span className="legend-dot" style={{ background: 'rgba(186,117,23,0.4)', border: '1px solid #BA7517' }} />IPCA acum. (R$)</span>
          <span className="legend-item"><span className="legend-line" style={{ background: '#E24B4A' }} />Pagamentos acum.</span>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Registro mensal</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th className="text-right">CDI (%)</th>
                <th className="text-right">IPCA (%)</th>
                <th className="text-right">Rend. bruto</th>
                <th className="text-right">Pagamento</th>
                <th className="text-right">Sobra</th>
                <th className="text-right">Rend. acum.</th>
                <th className="text-right">Pag. acum.</th>
                <th className="text-right">Saldo acum.</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.mes}>
                  <td><strong>{mesFmt(r.mes)}</strong></td>
                  <td className="text-right">{fmtPct(r.cdi)}</td>
                  <td className="text-right">{fmtPct(r.ipca)}</td>
                  <td className="text-right green">{fmt(r.rendMes)}</td>
                  <td className="text-right">{fmt(r.pgto)}</td>
                  <td className={`text-right ${r.sobra >= 0 ? 'green' : 'red'}`}>{fmt(r.sobra)}</td>
                  <td className="text-right">{fmt(r.rendAcum)}</td>
                  <td className="text-right">{fmt(r.pgtoAcum)}</td>
                  <td className={`text-right ${r.saldoAcum >= 0 ? 'green' : 'red'}`}>{fmt(r.saldoAcum)}</td>
                  <td>
                    <button className="btn-delete" onClick={() => onDelete(r.mes)} title="Remover">×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

function buildRows(meses) {
  let rendAcum = 0, pgtoAcum = 0
  return meses.map(m => {
    const cdi = m.cdi_pct / 100
    let rendMes = 0
    CDBS.forEach(c => { rendMes += c.valor * c.taxa * cdi })
    rendAcum += rendMes
    pgtoAcum += PGTO_MENSAL
    return {
      mes: m.mes, cdi: m.cdi_pct, ipca: m.ipca_pct,
      rendMes, pgto: PGTO_MENSAL, sobra: rendMes - PGTO_MENSAL,
      rendAcum, pgtoAcum, saldoAcum: rendAcum - pgtoAcum,
    }
  })
}
