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

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (current) {
            if (current.value === value)
                return this;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } 

                current.left = newNode;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                } 

                current.right = newNode;
            }
        }
    }
}