import React, { Fragment } from 'react'

import { TitleBar } from '../TitleBar'
import { SidePanel } from '../SidePanel'

import { Workspace } from './style'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
  <Fragment>
    <TitleBar />
    <Workspace>
      <SidePanel />
      {children}
    </Workspace>
  </Fragment>
  )
}
