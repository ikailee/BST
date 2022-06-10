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

    isBalanced(root) {
        if (root === null || (root.right === null && root.left === null)) {
            return true;    
        }

        let deepLeft = this.findDeep(root.left);
        let deepRight = this.findDeep(root.right);

        let diff = Math.abs(deepLeft - deepRight) <= 1;
        return diff && isBalanced(root.left) && isBalanced(root.right);
    }

    findDeep(root) {
        if (root == null) {
            return 0;
        }

        let deepL = findDeep(root.left) + 1;
        let deepR = findDeep(root.right) + 1;

        return deepL > deepR ? deepL:deepR;
    }
}