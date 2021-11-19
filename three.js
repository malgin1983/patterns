  class Node {
      constructor(parent, data, children = []){
        this.parent = parent;
        this.data = data;
        this.children = children
      }
    }
  
  class Tree {
    constructor (node){
      this._root = node
    }

    traverseDF(callback){
      (function recurse(currentNode) {
        !!currentNode.children.length && currentNode.children.forEach(child => recurse(child))
        callback(currentNode);
      })(this._root);
    }

    // Поиск в ширину  
    traversBF(callback)  {
        const arrNodes = [this._root]
        while (arrNodes.length) {
            for (let i = 0; i< arrNodes.length; i++){
                if(arrNodes[i].children.length){
                  arrNodes[i].children.forEach(childe => arrNodes.push(childe))
                }
            }
            callback(arrNodes[0]);
            arrNodes.shift()
        }
    }
    // Поиск в ширину  
    // traversBF(callback)  {
    //   const arrNodes = [this._root]
    //   while (arrNodes.length) {
    //       for (let i = 0; i< arrNodes.length; i++){
    //           if(arrNodes[i].children.length){
    //             arrNodes[i].children.forEach(childe => arrNodes.push(childe))
    //           }
    //       }
    //       callback(arrNodes[0]);
    //       arrNodes.shift()
    //   }
    // }

    // Поиск в ширину  
    traversBF(callback)  {
      const arrNodes = [this._root]
      while (arrNodes.length) {
        arrNodes.forEach(node => !!node?.length &&  node.children.forEach(childe => arrNodes.push(childe)))
          callback(arrNodes[0]);
          arrNodes.shift()
      }
    }
  }
  
  //Создаем дерево
  const nodeTwo = new Node('one', 'two', []);
  const nodeThree = new Node('one', 'three', []);
  const nodeFoure = new Node('one', 'four', []);
  const nodeOne = new Node(null, 'one', [nodeTwo, nodeThree, nodeFoure])

  const cnsl = (node) => console.log(node.data);
  
  const newTree = new Tree(nodeOne);
  
  newTree.traverseDF(cnsl);
  newTree.traversBF(cnsl);