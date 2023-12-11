export interface Question{
  type: number
  question: string
  answer: Answer[]
  isSpecify: boolean
  isRequire: boolean
  otherAnswer: string
  otherSelected: boolean
}

export interface Answer{
  selected: boolean
  name: string
}
