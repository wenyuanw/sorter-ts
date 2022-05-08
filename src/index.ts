import { Sorter } from "./Sorter"
import { NumberCollection } from "./NumberCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

// const numberCollection = new NumberCollection([100, 30, 5, 0])
// const sorter = new Sorter(numberCollection)
// sorter.sort()
// console.log(sorter.collection)

// const charactersCollection = new CharactersCollection('Xaayb')
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(100)
linkedList.add(20)
linkedList.add(-3)
linkedList.add(4)

const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print()
