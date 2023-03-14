import fs from 'fs'
import uniqueRandomArray  from 'unique-random-array'

const starWarsNames = JSON.parse( fs.readFileSync(new URL('./startwarsname.json', import.meta.url)))

export default  {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
}