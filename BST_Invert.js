class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    invert(node) {
        if (node === null || (node.right === null && node.left === null)) {
            return node;    
        }

        let temp = node.left;
        node.left = invert(node.right);
        node.right = invert(temp);

        return node;
    }
}