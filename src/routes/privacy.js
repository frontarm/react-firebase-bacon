import React from 'react'
import NarrowCardLayout from 'components/narrowCardLayout'
import { StyledHaiku } from 'components/typography'

export default function Privacy({ navigate }) {
  return (
    <NarrowCardLayout navigate={navigate}>
      <StyledHaiku>
        Your privacy is
        <br />
        Very important to us
        <br />I wrote a poem
      </StyledHaiku>
    </NarrowCardLayout>
  )
}
