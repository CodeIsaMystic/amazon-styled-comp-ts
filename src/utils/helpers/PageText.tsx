import React from "react"

interface Props {
  className?: string
  fontSize?: any
  color?: string
  marginBottom?: any
}
export const PageText: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>
}
