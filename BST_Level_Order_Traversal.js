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

    levelOrder() {
        if (this.root === null) return [];

        let map = {};
        let waitList = [ { level: 0, node: this.root} ];

        while (waitList.length > 0) {
            let current = waitList.pop();
            let node = current.node;

            if (!map[current.level]) {
                map[current.level] = [node.val];
            } else {
                map[current.level].push(node.val);
            }

            if (node.right) {
                waitList.push({ level: current.level + 1, node: node.right });
            }

            if (node.left) {
                waitList.push({ level: current.level + 1, node: node.left });
            }
        }

        var result = [];
        for (var i in map){
            result.push(map[i]);
        }
        return result;
    }
}