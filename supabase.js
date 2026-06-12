:root {
  --bg: #f7f6f3;
  --surface: #ffffff;
  --border: rgba(0,0,0,0.08);
  --border-strong: rgba(0,0,0,0.15);
  --text: #1a1a18;
  --muted: #6b6b67;
  --subtle: #9b9b96;
  --green: #1D9E75;
  --green-bg: #E1F5EE;
  --green-text: #0F6E56;
  --amber: #BA7517;
  --amber-bg: #FAEEDA;
  --amber-text: #633806;
  --red: #E24B4A;
  --red-bg: #FCEBEB;
  --red-text: #501313;
  --blue: #185FA5;
  --blue-bg: #E6F1FB;
  --blue-text: #042C53;
  --gold: #c9a84c;
  --radius: 10px;
  --radius-sm: 6px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, 'Inter', sans-serif; background: var(--bg); color: var(--text); font-size: 14px; line-height: 1.5; min-height: 100vh; }

/* AUTH */
.auth-screen { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1a1a18 0%, #2d2d29 100%); }
.auth-card { background: var(--surface); border-radius: 16px; padding: 40px; width: 360px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
.auth-logo { text-align: center; margin-bottom: 28px; }
.auth-logo-mark { width: 48px; height: 48px; background: var(--gold); border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
.auth-logo h1 { font-size: 17px; font-weight: 600; }
.auth-logo p { font-size: 12px; color: var(--muted); margin-top: 3px; }
.auth-field { margin-bottom: 14px; }
.auth-field label { display: block; font-size: 12px; font-weight: 500; color: var(--muted); margin-bottom: 5px; }
.auth-field input { width: 100%; padding: 10px 12px; border: 1px solid var(--border-strong); border-radius: var(--radius-sm); font-size: 14px; outline: none; color: var(--text); transition: border-color 0.15s; }
.auth-field input:focus { border-color: var(--gold); }
.auth-error { color: var(--red); font-size: 12px; margin-top: 10px; text-align: center; min-height: 18px; }

/* BUTTONS */
.btn-primary { width: 100%; padding: 11px; background: var(--text); color: #fff; border: none; border-radius: var(--radius-sm); font-size: 14px; font-weight: 500; cursor: pointer; transition: opacity 0.15s; margin-top: 4px; }
.btn-primary:hover { opacity: 0.85; }
.btn-ghost { padding: 6px 12px; border: 1px solid var(--border-strong); border-radius: var(--radius-sm); background: transparent; font-size: 12px; color: var(--muted); cursor: pointer; transition: background 0.15s; }
.btn-ghost:hover { background: var(--bg); }
.btn-add { padding: 8px 16px; background: var(--gold); color: #fff; border: none; border-radius: var(--radius-sm); font-size: 13px; font-weight: 500; cursor: pointer; transition: opacity 0.15s; }
.btn-add:hover { opacity: 0.88; }
.btn-cancel { padding: 10px 18px; background: transparent; border: 1px solid var(--border-strong); border-radius: var(--radius-sm); font-size: 14px; cursor: pointer; color: var(--muted); }
.btn-cancel:hover { background: var(--bg); }
.btn-save { flex: 1; padding: 10px; background: var(--text); color: #fff; border: none; border-radius: var(--radius-sm); font-size: 14px; font-weight: 500; cursor: pointer; }
.btn-save:hover { opacity: 0.85; }

/* TOPBAR */
.topbar { background: var(--surface); border-bottom: 1px solid var(--border); padding: 0 24px; height: 56px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
.topbar-left { display: flex; align-items: center; gap: 12px; }
.topbar-logo { width: 32px; height: 32px; background: var(--gold); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #fff; }
.topbar-title { font-size: 14px; font-weight: 600; }
.topbar-sub { font-size: 11px; color: var(--muted); }
.topbar-right { display: flex; gap: 8px; align-items: center; }
.user-email { font-size: 11px; color: var(--muted); }

/* LAYOUT */
.main { max-width: 1100px; margin: 0 auto; padding: 28px 24px; }
.actions-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
.actions-bar h2 { font-size: 18px; font-weight: 600; }

/* KPI */
.kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; margin-bottom: 20px; }
.kpi { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 18px; }
.kpi-label { font-size: 11px; color: var(--muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 6px; }
.kpi-value { font-size: 21px; font-weight: 600; }
.kpi-sub { font-size: 11px; color: var(--subtle); margin-top: 3px; }
.kpi-value.green { color: var(--green); }
.kpi-value.red { color: var(--red); }
.kpi-value.amber { color: var(--amber); }

/* CARD */
.card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 22px; margin-bottom: 16px; }
.card-title { font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }

/* TABLE */
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
th { text-align: left; font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.04em; padding: 8px 10px; border-bottom: 1px solid var(--border); }
td { padding: 9px 10px; border-bottom: 1px solid var(--border); }
tr:last-child td { border-bottom: none; }
.tr-total td { font-weight: 600; background: var(--bg); }
.text-right { text-align: right; }
.green { color: var(--green); }
.red { color: var(--red); }
.amber { color: var(--amber); }

/* BADGE */
.badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 7px; border-radius: 20px; }
.badge-green { background: var(--green-bg); color: var(--green-text); }
.badge-amber { background: var(--amber-bg); color: var(--amber-text); }
.badge-blue { background: var(--blue-bg); color: var(--blue-text); }
.badge-red { background: var(--red-bg); color: var(--red-text); }

/* TABS */
.tabs { display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--border); }
.tab-btn { padding: 8px 16px; font-size: 13px; font-weight: 500; color: var(--muted); border: none; background: transparent; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: color 0.15s; }
.tab-btn.active { color: var(--text); border-bottom-color: var(--gold); }

/* MODAL */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 200; }
.modal { background: var(--surface); border-radius: 14px; padding: 28px 30px; width: 420px; max-width: 95vw; box-shadow: 0 20px 60px rgba(0,0,0,0.25); }
.modal h3 { font-size: 16px; font-weight: 600; margin-bottom: 18px; }
.modal-field { margin-bottom: 14px; }
.modal-field label { display: block; font-size: 12px; font-weight: 500; color: var(--muted); margin-bottom: 5px; }
.modal-field input, .modal-field select { width: 100%; padding: 9px 12px; border: 1px solid var(--border-strong); border-radius: var(--radius-sm); font-size: 14px; outline: none; color: var(--text); }
.modal-field input:focus { border-color: var(--gold); }
.modal-hint { font-size: 11px; color: var(--muted); margin-bottom: 14px; line-height: 1.6; }
.modal-hint a { color: var(--blue); }
.modal-actions { display: flex; gap: 10px; margin-top: 6px; }

/* STATUS BAR */
.status-bar { background: var(--amber-bg); border: 1px solid rgba(186,117,23,0.2); border-radius: var(--radius-sm); padding: 10px 14px; font-size: 12px; color: var(--amber-text); margin-bottom: 16px; }

/* CHART */
.chart-wrap { position: relative; height: 220px; margin-top: 8px; }
.chart-legend { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 10px; font-size: 11px; color: var(--muted); }
.legend-item { display: flex; align-items: center; gap: 4px; }
.legend-dot { width: 10px; height: 10px; border-radius: 2px; }
.legend-line { width: 10px; height: 3px; border-radius: 1px; display: inline-block; }

/* RESGATE */
.resgate-cdb { border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 10px; }
.resgate-cdb-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.resgate-cdb-name { font-weight: 600; font-size: 13px; }
.resgate-cdb-sub { font-size: 11px; color: var(--muted); }
.resgate-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; }
.resgate-item-label { font-size: 11px; color: var(--subtle); margin-bottom: 2px; }
.resgate-item-value { font-size: 14px; font-weight: 600; }
.resgate-total { background: var(--bg); border: 1px solid var(--border-strong); border-radius: var(--radius-sm); padding: 14px; }
.resgate-total-title { font-weight: 600; font-size: 13px; margin-bottom: 10px; }

/* DELETE BTN */
.btn-delete { background: none; border: none; cursor: pointer; color: var(--subtle); font-size: 18px; line-height: 1; padding: 0 4px; }
.btn-delete:hover { color: var(--red); }

/* LOADING */
.loading { text-align: center; padding: 40px; color: var(--muted); font-size: 13px; }

/* IR TABLE */
.ir-ref-table th, .ir-ref-table td { padding: 6px 10px; font-size: 13px; }

@media (max-width: 600px) {
  .main { padding: 16px 14px; }
  .topbar { padding: 0 14px; }
  .kpi-value { font-size: 18px; }
  .auth-card { padding: 28px 20px; }
}
