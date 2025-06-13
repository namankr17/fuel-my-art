"use client"
import React, { useState } from 'react'
import { SessionProvider } from "next-auth/react"
import { ReloadContext } from '@/context/ReloadContext'

const SessionWrapper = ({children}) => {
  const [reload, setReload] = useState(false)
  return (
    <SessionProvider>
      <ReloadContext.Provider value={{ reload, setReload }}>
        {children}
      </ReloadContext.Provider>
    </SessionProvider>
  )
}

export default SessionWrapper
