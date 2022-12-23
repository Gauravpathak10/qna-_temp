console.log('---Prine number find');
function checkPrimeNumber(x) {
    let isPrime = true;
    // check if x is equal to 1
    if (x === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    // check if x is greater than 1
    else if (x > 1) {
        // looping through 2 to x-1
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${x} is a prime number`);
        } else {
            console.log(`${x} is a not prime number`);
        }
    }

    // check if x is less than 1
    else {
        console.log("The x is not a prime number.");
    }
}
console.log(checkPrimeNumber(1));



//example of while loop with switch case
var a = 1;
while (a < 10) {
    switch (true) {
        case (a <= 5):
            console.log(a, 'is less than 5');
            break;
        case (a > 5 && a < 8):
            console.info(a, 'greater than 5 and less than 8 ');
            break;
        case (a >= 8):
            console.warn(a, 'greater than or equal to 8');
            break;
    }
    a++;
}

console.log('---Recursion');
//  Recursion is a technique used to solve computer problems by creating a function that calls itself until your program achieves the
//  desired result:()=>

function randomUntilFive(result = 0, count = 0) {
    if (result === 5) {
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFive(result, count);
}

randomUntilFive();

console.log('---BinaryTree');
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
//creating tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //adding function node()=> tree
    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let tree = this.root;


        // left will be small numner and rtight will be greater numbers 
        while (true) {
            if (value < tree.value) {    //---left 
                if (!tree.left) {
                    tree.left = newNode;
                    return this;
                }
                tree = tree.left;
            } else {
                if (!tree.right) {  // ---right
                    tree.right = newNode;
                    return this;
                }
                tree = tree.right;
            }
        }
        return this;
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let tree = this.root;

        while (tree) {
            if (value < tree.value) {
                tree = tree.left;
            } else if (value > tree.value) {
                tree = tree.right;
            } else if (tree.value === value) {
                return tree;
            }
        }

        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a Match!
                //Option 1: No right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {
                    //Find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }

                    }
                }
                return true;
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(3);
tree.insert(6);
// tree.insert(1);
// tree.insert(9);
tree.lookup(6);
// tree.remove(6);
console.log(tree);



console.log('---Closure');

//    Closure is something we could have reference under a child function relating to its parent , in this eg : childName can be accessed by child() function 
function parent() {
    let childName = 'john'
    function child() {
        console.log(childName);
    }
    child()
}
console.log(parent());

//getting elemnt  by name with same id 
console.log('---elemnt  by name with same id ');
console.log(document.getElementsByName('container'));