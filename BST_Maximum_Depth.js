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

    maxDepth(node) {
        if (node === null) return 0;

        let deepL = 1;
        let deepR = 1;

        if (node.left != null) {
            deepL = deepL + maxDepth(node.left);
        }

        if (node.right !== null){
            deepR = deepR + maxDepth(node.right);
        }

        return deepL > deepR ? deepL: deepR;
    } 
}