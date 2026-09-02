export default function InternalGrowthConfigPage() {
  if (process.env.VERCEL_ENV === 'preview') {
    console.log('[growth-tool-config]', JSON.stringify({
      resendKey: Boolean(process.env.RESEND_API_KEY),
      toolFrom: Boolean(process.env.TOOL_RESULT_FROM_EMAIL),
      leadFrom: Boolean(process.env.LEAD_FROM_EMAIL),
      leadNotify: Boolean(process.env.LEAD_NOTIFY_EMAIL),
      crmUrl: Boolean(process.env.CRM_WEBSITE_LEAD_URL),
      priorityWhatsApp: Boolean(process.env.PRIORITY_LEAD_WHATSAPP_WEBHOOK_URL),
    }))
  }
  return null
}
