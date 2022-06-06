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

    inOrderSuccessor(root, p) {
        // check if p has right subtree
        if (root.right) {
            let successor = null;
            let current = root.right;

            while (current) {
                successor = current;
                current = current.left;
            }

            return successor;
        }

        // if p does not have right subtree
        let successor = null;
        let current = root;

        while (current !== p) {
            if (p.value < current.value) {
                successor = current;
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return successor;
    }
}