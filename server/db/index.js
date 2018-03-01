import path from 'path'

export const dataFiles = {
  hero: path.resolve('server', 'data', 'hero-db.json'),
  villain: path.resolve('server', 'data', 'villain-db.json')
}

export * from './hero'
export * from './villain'
