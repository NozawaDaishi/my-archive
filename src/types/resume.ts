export type SelfInformation = {
  fullName: string
  furigana: string
  birthDate: Date
  email: string
  phoneNumber: string
}

export type AcademicBackground = {
  date: Date
  content: string
  status: string
}

export type WorkExperience = {
  date: Date
  content: string
  status: string
}

export type Qualification = {
  date: Date
  content: string
  status: string
}

export type ResumeData = {
  selfInformation: SelfInformation
  academicBackground: AcademicBackground[]
  workExperience: WorkExperience[]
  qualifications: Qualification[]
}
