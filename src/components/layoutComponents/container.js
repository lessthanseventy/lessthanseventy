import React from 'react'

export default ({ children }) => (
  <div style={{ maxWidth: 'min(1680px, 100vw)', margin: '0 auto' }}>
    {children}
  </div>
)
