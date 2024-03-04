declare type Nullable<T> = T | null

declare type Existing<T> = T extends null | undefined ? never : T

declare interface DDOption {
  value: string | number
  label: string | number
}

declare module '*.scss' {
  const content: { [className: string]: string }
  // eslint-disable-next-line import/no-default-export
  export default content
}
