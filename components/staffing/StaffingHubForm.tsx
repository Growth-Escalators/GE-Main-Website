'use client'

import { useState } from 'react'
import { trackLead } from '@/lib/analytics'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function StaffingHubForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    const form = event.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source: 'Staffing Hub Requirement' }
    data.forEach((value, key) => { fields[key] = String(value) })
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) })
      if (!response.ok) throw new Error('submit failed')
      trackLead('form', { source: 'Staffing Hub Requirement' })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <div style={{ padding: 34, borderRadius: 24, background: '#f1efff' }}><strong style={{ fontSize: 28 }}>Requirement received.</strong><p style={{ marginTop: 10, color: '#666a79' }}>We’ll review the role and come back with feasibility and next steps.</p></div>
  }

  const inputStyle = { width: '100%', padding: '14px 15px', border: '1px solid rgba(23,6,83,.15)', borderRadius: 12, background: '#fff', fontSize: 14 } as const
  const labelStyle = { display: 'grid', gap: 7, fontSize: 10, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: '.08em' }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 14, padding: 26, borderRadius: 28, background: '#f6f3ed' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 14 }}>
        <label style={labelStyle}>Name *<input name="name" required style={inputStyle} /></label>
        <label style={labelStyle}>Work email *<input name="email" type="email" required style={inputStyle} /></label>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 14 }}>
        <label style={labelStyle}>Phone / WhatsApp *<input name="phone" required style={inputStyle} /></label>
        <label style={labelStyle}>Company *<input name="company" required style={inputStyle} /></label>
      </div>
      <label style={labelStyle}>Role / skill needed *<input name="role" required placeholder="e.g. SAP ABAP, DevOps, Java Full Stack" style={inputStyle} /></label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 14 }}>
        <label style={labelStyle}>Engagement<select name="engagement" defaultValue="" style={inputStyle}><option value="" disabled>Select</option><option>India permanent hiring</option><option>India contract / C2H</option><option>Offshore resource from India</option><option>Partner fulfilment</option></select></label>
        <label style={labelStyle}>Resources needed<select name="seats" defaultValue="1" style={inputStyle}><option>1</option><option>2</option><option>3–5</option><option>6–10</option><option>10+</option></select></label>
      </div>
      <label style={labelStyle}>Requirement context<textarea name="message" rows={5} placeholder="Mandatory skills, experience, location/working hours, budget and preferred start date." style={inputStyle} /></label>
      <button type="submit" disabled={status === 'submitting'} style={{ minHeight: 52, borderRadius: 999, background: '#170653', color: '#fff', fontSize: 11, fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase' }}>{status === 'submitting' ? 'Sending…' : 'Share the requirement ↗'}</button>
      {status === 'error' && <p style={{ color: '#a22', fontSize: 12 }}>Couldn’t send. Email <a href="mailto:jatin@growthescalators.com">jatin@growthescalators.com</a>.</p>}
    </form>
  )
}
