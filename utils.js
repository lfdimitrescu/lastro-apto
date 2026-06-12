export const TOTAL = 1_900_000
export const PGTO_MENSAL = 12_000

const totalRef = 1_580_623.98 + 204_176.17 + 209_755.75

export const CDBS = [
  {
    nome: 'CDB XP S.A.',
    emissor: 'Banco XP',
    venc: '2028-01-05',
    taxa: 1.00,
    saldoRef: 1_580_623.98,
    inicio: '2025-01-05',
  },
  {
    nome: 'CDB XP S.A.',
    emissor: 'Banco XP',
    venc: '2027-12-30',
    taxa: 1.00,
    saldoRef: 204_176.17,
    inicio: '2025-12-30',
  },
  {
    nome: 'CDB Carrefour',
    emissor: 'Banco Carrefour',
    venc: '2027-04-28',
    taxa: 1.02,
    saldoRef: 209_755.75,
    inicio: '2025-04-28',
  },
].map(c => ({
  ...c,
  peso: c.saldoRef / totalRef,
  valor: TOTAL * (c.saldoRef / totalRef),
}))

export const MESES_NOMES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
