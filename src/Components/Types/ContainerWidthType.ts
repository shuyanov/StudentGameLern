export type ContainerWidthType =
  | 'fullWidth'
  | 'contentWidth'

export const ContainerMaxWidth: Record<ContainerWidthType, number | string> = {
  ['contentWidth']: 1200,
  ['fullWidth']: '100%',
}
