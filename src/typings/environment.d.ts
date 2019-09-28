import * as ts from 'typescript'
import * as Bluebird from 'bluebird'

declare global {
  interface Promise<T> extends Bluebird<T> {}
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      POSTGRES_DB: string
      POSTGRES_USER: string
      POSTGRES_PASSWORD: string
      POSTGRES_HOST: string
      NODE_ENV: 'development' | 'production'
    }
  }
}
