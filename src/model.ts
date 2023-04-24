import { IPlot, IModel } from './types'

const _draw = ({
  ctx,
  model,
}: {
  ctx: CanvasRenderingContext2D
  model: IModel
}) => {
  ctx.moveTo(model.x, model.y)
  ctx.lineTo(model.x + 100, model.y + 100)
  ctx.strokeStyle = 'white'
  ctx.stroke()
}

const createPlot = ({ ctx }: { ctx: CanvasRenderingContext2D }): IPlot => {
  const model: IModel = {
    x: 100,
    y: 100,
  }

  const width = ctx.canvas.clientWidth
  const height = ctx.canvas.clientHeight

  ctx.canvas.width = width
  ctx.canvas.height = height

  console.log('Initialized with w/h %o/%o', width, height)

  return {
    draw: () => _draw({ ctx, model }),
  }
}

export { createPlot }
