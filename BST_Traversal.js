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
        let stack = [];
        let visited = [];
        let current = this.root;

        stack.push(current);
        while (stack.length > 0) {
            current = stack.pop();
            visited.push(current.value);

            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }

        return visited;
    }

    inOrder() {
        let stack = [];
        let visited = [];
        let current = this.root;

        while (current != null || stack.length > 0) {
            while (current != null) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            visited.push(current.value);
            current = current.right;
        }

        return visited;
    }

    postOrder() {
        let stack1 = [];
        let stack2 = [];
        let visited = [];
        let current = this.root;

        stack1.push(current);
        while (stack1.length > 0) {
            let temp = stack1.pop();
            stack2.push(temp);

            if (temp.left) stack1.push(temp.left);
            if (temp.right) stack1.push(temp.right);
        }

        while (stack2.length > 0) {
            let node = stack2.pop();
            visited.push(node.value);
        }

        return visited;
    }
}