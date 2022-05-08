import { Sorter } from "./Sorter"
import { NumberCollection } from "./NumberCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

// const numberCollection = new NumberCollection([100, 30, 5, 0])
// numberCollection.sort()
// console.log(numberCollection.data)

// const charactersCollection = new CharactersCollection('Xaayb')
// charactersCollection.sort()
// console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(100)
linkedList.add(20)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()
