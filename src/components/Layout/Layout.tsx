import * as React from 'react'
import { TitleBar } from '../TitleBar/TitleBar'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <TitleBar />
    {children}
  </>
)
