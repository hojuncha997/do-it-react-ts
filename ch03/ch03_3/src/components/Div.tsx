import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'

import type { WidthHeight } from './WidthHeight'

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> & { src?: string }

// prettier-ignore
export const Div: FC<DivProps> = ({width, height, style: _style, src, ...props}) => {
    const style = {..._style, width, height, backgroundImage: src && `url(${src})`}
    return <div {...props} style={style} /> 
}
