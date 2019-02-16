import * as React from 'react'
import { TitleBar } from '../TitleBar/TitleBar'
import { SidePanel } from '../SidePanel/SidePanel'
import { Workspace } from './style'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <TitleBar />
    <Workspace>
      <SidePanel />
      {children}
    </Workspace>
  </>
)
