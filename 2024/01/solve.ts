import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'

const file = fs.readFileSync(path.join(__dirname, 'input'), 'utf-8')

const listA: number[] = []
const listB: number[] = []

file
  .split('\n')
  .filter((line) => line !== undefined && line !== '') // the final line is inserted by ide 🥲
  .map((line) => line.trim())
  .forEach((line) => {
    const [a, b] = line.split(' ')
    listA.push(Number(a))
    listB.push(Number(b))
  })

const sortAscending = (a: number, b: number) => a - b
listA.sort(sortAscending)
listB.sort(sortAscending)

assert(listA.length === listB.length)
let sum = 0
for (let i = 0; i < listA.length; i++) {
  const diff: number = Math.abs(listA[i] - listB[i])
  sum += diff
}

console.log(sum)
