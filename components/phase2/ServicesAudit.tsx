'use client'

import { useState } from 'react'
import { trackLead } from '@/lib/analytics'
import { WhatsAppConsentField } from '@/components/landing/WhatsAppConsent'

const SERVICE_OPTIONS=['Performance Marketing','Funnels & Automation','Web & Commerce','Creative & Social','SEO & Organic','Software & AI','Technology Talent']

type Status='idle'|'submitting'|'success'|'error'

export default function ServicesAudit(){
  const [status,setStatus]=useState<Status>('idle')
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();setStatus('submitting')
    const form=e.currentTarget
    const data=new FormData(form)
    const fields:Record<string,string>={source:'Services Free Audit'}
    data.forEach((v,k)=>{fields[k]=String(v)})
    try{
      const res=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(fields)})
      if(!res.ok) throw new Error('send failed')
      trackLead('form',{source:'Services Free Audit'});form.reset();setStatus('success')
    }catch{setStatus('error')}
  }
  return <section id="book" className="svc-audit">
    <div className="svc-audit-grid" aria-hidden />
    <div className="svc-audit-shell">
      <div className="svc-audit-copy">
        <span className="svc-kicker">Free Growth Audit · Built around the constraint</span>
        <h2>DON&apos;T ADD<br/>MORE SPEND<br/>TO THE WRONG<br/>PROBLEM.</h2>
        <p>We review the acquisition and conversion journey first, then tell you which lever deserves attention — media, funnel, site, creative, search, automation or delivery capacity.</p>
        <div className="svc-diagnostic">
          <div><span>01</span><strong>Acquisition</strong><small>Where demand is coming from</small></div>
          <div><span>02</span><strong>Conversion</strong><small>Where intent is leaking</small></div>
          <div><span>03</span><strong>Retention</strong><small>Where more value can compound</small></div>
          <div><span>04</span><strong>Systems</strong><small>What should be automated or built</small></div>
        </div>
      </div>
      <div className="svc-audit-card">
        <div className="svc-card-head"><span>YOUR INPUT</span><strong>We&apos;ll find the highest-leverage next move.</strong></div>
        {status==='success'?<div className="svc-success"><b>✓</b><h3>We&apos;re on it.</h3><p>We&apos;ll review the details and get back to you within 24 hours.</p></div>:<form onSubmit={submit}>
          <div className="svc-fields"><label><span>Full name *</span><input name="name" required placeholder="Your name"/></label><label><span>Phone / WhatsApp</span><input name="phone" type="tel" placeholder="+91 …"/></label></div>
          <label><span>Work email *</span><input name="email" type="email" required placeholder="you@company.com"/></label>
          <label><span>Business / website</span><input name="company" placeholder="company.com"/></label>
          <label><span>Where do you think growth is stuck?</span><select name="service" defaultValue=""><option value="" disabled>Select a capability</option>{SERVICE_OPTIONS.map(x=><option key={x}>{x}</option>)}</select></label>
          <WhatsAppConsentField />

          <button disabled={status==='submitting'}>{status==='submitting'?'Sending…':'Get My Free Audit ↗'}</button>
          <a href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20a%20free%20growth%20audit." target="_blank" rel="noopener noreferrer" onClick={()=>trackLead('whatsapp')}>Or chat on WhatsApp ↗</a>
          {status==='error'&&<p className="svc-error">Couldn&apos;t send. Email <a href="mailto:jatin@growthescalators.com">jatin@growthescalators.com</a>.</p>}
        </form>}
      </div>
    </div>
    <style jsx>{`
      .svc-audit{position:relative;overflow:hidden;background:#170653;color:#fff;padding:clamp(100px,10vw,150px) 0;isolation:isolate}.svc-audit-grid{position:absolute;inset:0;z-index:-1;opacity:.2;background-image:radial-gradient(circle at 8% 72%,rgba(123,240,196,.7),transparent 18%),radial-gradient(circle at 90% 15%,rgba(92,36,245,.9),transparent 24%),linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);background-size:auto,auto,48px 48px,48px 48px}.svc-audit-shell{width:min(100%,1440px);margin:0 auto;padding:0 clamp(22px,5vw,76px);display:grid;grid-template-columns:.92fr 1.08fr;gap:clamp(48px,7vw,100px);align-items:center}.svc-kicker{font-size:9px;font-weight:900;letter-spacing:.15em;text-transform:uppercase;color:#7bf0c4}.svc-audit-copy h2{margin:22px 0 25px;font-family:'Arial Narrow',var(--font-jakarta),sans-serif;font-size:clamp(68px,7.8vw,112px);line-height:.77;letter-spacing:-.04em;text-transform:uppercase}.svc-audit-copy>p{max-width:570px;margin:0;font-size:16px;line-height:1.62;color:rgba(255,255,255,.72)}.svc-diagnostic{display:grid;grid-template-columns:1fr 1fr;margin-top:34px;border-top:1px solid rgba(255,255,255,.2)}.svc-diagnostic>div{min-height:105px;padding:18px 15px 16px 0;border-bottom:1px solid rgba(255,255,255,.2)}.svc-diagnostic>div:nth-child(odd){border-right:1px solid rgba(255,255,255,.2)}.svc-diagnostic>div:nth-child(even){padding-left:18px}.svc-diagnostic span{font-size:8px;font-weight:900;color:#7bf0c4}.svc-diagnostic strong{display:block;margin-top:10px;font-family:'Arial Narrow',sans-serif;font-size:27px;text-transform:uppercase}.svc-diagnostic small{display:block;margin-top:4px;font-size:9px;color:rgba(255,255,255,.55)}.svc-audit-card{padding:clamp(28px,4vw,46px);border-radius:32px;background:#fff;color:#170653;box-shadow:0 34px 80px rgba(0,0,0,.26)}.svc-card-head{padding-bottom:23px;border-bottom:1px solid rgba(23,6,83,.14)}.svc-card-head span{display:block;font-size:8px;font-weight:900;letter-spacing:.13em;color:#5c24f5}.svc-card-head strong{display:block;margin-top:10px;font-family:'Arial Narrow',sans-serif;font-size:32px;line-height:.92;text-transform:uppercase}.svc-audit-card form{display:flex;flex-direction:column;gap:14px;padding-top:24px}.svc-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}.svc-audit-card label>span{display:block;margin-bottom:7px;font-size:8px;font-weight:900;letter-spacing:.09em;text-transform:uppercase;color:#686777}.svc-audit-card input,.svc-audit-card select{width:100%;min-height:54px;padding:0 14px;border:1px solid rgba(23,6,83,.16);border-radius:13px;background:#f8f8fc;color:#170653;font:inherit;font-size:13px;outline:none}.svc-audit-card input:focus,.svc-audit-card select:focus{border-color:#5c24f5;box-shadow:0 0 0 4px rgba(92,36,245,.09);background:#fff}.svc-audit-card button{min-height:56px;margin-top:6px;border:0;border-radius:999px;background:#5c24f5;color:#fff;font-size:10px;font-weight:900;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;box-shadow:0 12px 28px rgba(92,36,245,.25)}.svc-audit-card button:disabled{opacity:.6}.svc-audit-card form>a{min-height:50px;display:grid;place-items:center;border:1px solid rgba(23,6,83,.18);border-radius:999px;font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.svc-error{margin:0;font-size:11px;color:#a31313}.svc-error a{text-decoration:underline}.svc-success{min-height:400px;display:grid;place-items:center;align-content:center;text-align:center}.svc-success b{width:58px;height:58px;display:grid;place-items:center;border-radius:50%;background:#ddf8ef;color:#167c58;font-size:26px}.svc-success h3{margin:16px 0 7px;font-family:'Arial Narrow',sans-serif;font-size:50px;text-transform:uppercase}.svc-success p{max-width:340px;margin:0;color:#686777}@media(max-width:960px){.svc-audit-shell{grid-template-columns:1fr}.svc-audit-copy{max-width:760px}}@media(max-width:640px){.svc-audit{padding:86px 0 94px}.svc-audit-shell{padding-inline:20px;gap:44px}.svc-audit-copy h2{font-size:clamp(58px,17vw,76px)}.svc-diagnostic{grid-template-columns:1fr}.svc-diagnostic>div:nth-child(odd){border-right:0}.svc-diagnostic>div:nth-child(even){padding-left:0}.svc-audit-card{padding:24px 18px;border-radius:24px}.svc-fields{grid-template-columns:1fr}.svc-card-head strong{font-size:27px}}
    `}</style>
  </section>
}
