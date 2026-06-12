import { MESES_NOMES } from './constants'

export const fmt = n =>
  'R$ ' + parseFloat(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const fmtPct = (n, dec = 3) =>
  parseFloat(n).toFixed(dec).replace('.', ',') + '%'

export const mesFmt = ym => {
  const [y, m] = ym.split('-')
  return MESES_NOMES[parseInt(m) - 1] + '/' + y.slice(2)
}

export const diasEntre = (d1str, d2str) => {
  const d1 = new Date(d1str), d2 = new Date(d2str)
  return Math.round((d2 - d1) / 86_400_000)
}

export const irAliquota = dias => {
  if (dias <= 180) return 0.225
  if (dias <= 360) return 0.200
  if (dias <= 720) return 0.175
  return 0.150
}

export const irLabel = dias => {
  if (dias <= 180) return '22,5%'
  if (dias <= 360) return '20,0%'
  if (dias <= 720) return '17,5%'
  return '15,0%'
}

export const irBadgeClass = dias => {
  if (dias <= 180) return 'badge-red'
  if (dias <= 720) return 'badge-amber'
  return 'badge-green'
}
