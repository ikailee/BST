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

    isSymmetric() {
        if(this.root == null || (this.root.right == null && this.root.left == null) ){
            return true;
        }

        this.root.right = this.revertTree(root.right);
        return isSameTree(root.left, root.right);
    }

    revertTree(node) {
        if (node == null || node.left == null && node.right == null) {
            return node;
        }

        let temp = this.revertTree(node.left);
        node.left = this.revertTree(node.right);
        node.right = temp;

        return node;
    }

    isSameTree(left, right) {
        if (left == null && right == null) {
            return true;
        }

        if (left == null && right != null || right == null && left != null) {
            return false;
        }

        if (left.val != right.val) {
            return false;
        }

        return isSameTree(left.right, right.right) && isSameTree(left.left, right.left)
    }
}
