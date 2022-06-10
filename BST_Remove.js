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

    remove(value) {
        if (val == null) return undefined;
        this.root = this.removeNode(this.root, value);
    }
    
    removeNode(node, value) {
        if (!node) return undefined;

        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            if (!node.left && !node.right) {
                return null;
            } else if (!node.left) {
                return currentNode.right;
            } else if (!node.right) {
                return currentNode.left;
            } else {
                let minRightChildNode = this.findMinValue(currentNode.right);
                node.value = minRightChildNode.value;
                node.right = this.removeNode(current.right, minRightChildNode.value);
                return node;
            }
        }
    }

    findMinValue(node) {
        if (node.left) {
          return this.findMinValue(node.left);
        }
        return node;
    }
}