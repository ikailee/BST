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

    // Breadth-First Search
    BFS() {
        let queue = [];
        let visited = [];
        let current = this.root;

        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            visited.push(current.value);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return visited;
    }

    // Depth-First Search
    preOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return visited;
    }

    inOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return visited;
    }

    postOrder() {
        let visited = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }

        traverse(current);
        return visited;
    }
}

