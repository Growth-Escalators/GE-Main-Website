export type CtaButtonProps = {
  href: string
  label: string
  variant?: 'primary' | 'outline'
  size?: 'default' | 'compact'
  onClick?: () => void
  target?: string
  rel?: string
  style?: React.CSSProperties
  className?: string
}

export default function CtaButton({ href, label, variant = 'primary', size = 'default', onClick, target, rel, style, className }: CtaButtonProps) {
  const primary = variant === 'primary'
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      style={{
        minHeight: size === 'compact' ? 40 : 48,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        padding: size === 'compact' ? '0 15px' : '0 22px', borderRadius: 999,
        border: `1px solid ${primary ? '#170653' : 'rgba(23,6,83,.25)'}`,
        background: primary ? '#170653' : 'transparent', color: primary ? '#fff' : '#170653',
        fontSize: 10, fontWeight: 900, letterSpacing: '.075em', textTransform: 'uppercase',
        whiteSpace: 'nowrap', textDecoration: 'none', transition: 'transform .24s ease',
        ...style,
      }}
    >{label}</a>
  )
}
