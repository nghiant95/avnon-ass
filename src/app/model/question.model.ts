export interface Question{
  type: number
  question: string
  answer: Answer[]
  isSpecify: boolean
  isRequire: boolean
}

export interface Answer{
  selected: boolean
  name: string
}
