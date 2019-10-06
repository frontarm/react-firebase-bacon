import React from 'react'
import NarrowCardLayout from 'components/narrowCardLayout'
import { StyledHaiku } from 'components/typography'

export default function NotFound({ navigate }) {
  return (
    <NarrowCardLayout navigate={navigate}>
      <StyledHaiku>
        I couldn't find it
        <br />
        The page probably hates me
        <br />
        I'm really depressed
      </StyledHaiku>
    </NarrowCardLayout>
  )
}
