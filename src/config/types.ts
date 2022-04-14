export type ENVIRONMENT = 'development' | 'production' | string

export interface Dictionary<T> {
	[index: string]: T
}

export interface Map {
  [key: string]: any
}

export interface PropertyInterface {
  [key: string]: (string | number | undefined)[] | Map | Number | string | undefined
}

export type Property = undefined | PropertyInterface