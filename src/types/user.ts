export interface User {
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    country: string
    postcode: number
  }
  picture: {
    medium: string
  }
}

export interface ApiResponse {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}
