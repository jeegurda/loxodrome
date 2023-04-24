import { useEffect, useRef } from 'react'
import { Controls } from './Controls'
import { Plot } from './Plot'
import * as S from './loxodromes.styled'
import { IPlot } from '../types'

export const Loxodromes = () => {
  const plotRef = useRef<IPlot>(null)

  return (
    <S.Container>
      <S.Plot>
        <Plot plotRef={plotRef} />
      </S.Plot>
      <S.Controls>
        <Controls />
      </S.Controls>
    </S.Container>
  )
}
