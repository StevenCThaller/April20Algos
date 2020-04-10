class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

    printList() {
        if(this.head == null) {
            console.log("The list is empty.");
            return this;
        }
        let str = "H: ";
        let runner = this.head;
        while(runner != null) {
            str += `${runner.value} -> `
            runner = runner.next;
        }
        console.log(str);
        return this;
    }

    // Add to front
    addToFront(value) {
        // create the new node we want to add to the front
        var newNode = new SLNode(value);
        // set the new node's next to the current head
        newNode.next = this.head;
        // reassign the head to the new start of the list
        this.head = newNode;
        return this;
    }


    // Remove from front
    removeFromFront() {
        // If the list is empty, there's nothing to remove.
        if(this.head == null){
            return "This list is empty.";
        }
        // set a temporary variable as the head to return the node we're removing
        var temp = this.head;
        // set the head to the next node in the list (this still works if the list is only
        // one element long, as the head's next will be null and a list with a null head is 
        // an empty list)
        this.head = this.head.next;

        // return the removed node
        return temp;
    }


    // Contains. Challenge --> Do this recursively
    contains(value) {
        // return a boolean: if the value is in the list, return true, else return false
        if(this.head == null){
            return false;
        }
        // Set our runner to traverse through the list
        let runner = this.head;
        while(runner != null) {
            // check if the runner's value matches the value we're searching for
            if(runner.value == value) {
                return true;
            }
            // move it along
            runner = runner.next;
        }
        // if we've reached the end of our list and NOT found the value, then it must not be in here
        return false;
    }
    // same as above but recursively
    rContains(value, runner = this.head) {
        // check for empty list or end of list because of recursion
        if(runner == null) {
            return false;
        }
        // check if runner's value is the value we're looking for
        else if(runner.value == value) {
            return true;
        }
        // make recursive call and return it so as soon as the end of the call stack finishes it shoots back up the chain
        return this.rContains(value, runner.next);
    }


    // Remove from the back of a singly linked list
    removeFromBack() {
        if(this.head == null) {
            return this;
        }
        else if(this.head.next == null) {
            this.head = null;
            return this;
        }
        let runner = this.head;
        let walker = null;
        while(runner.next != null) {
            walker = runner;
            runner = runner.next;
        }
        walker.next = null;
        return this;
    }

    // Move the smallest number to the front of the singly linked list
    moveMinToFront() {
        if(this.head == null) {
            return this;
        }
        let runner = this.head;
        let walker = null;
        let min = this.head;
        let minprev = null;

        while(runner.next != null) {
            if(runner.value < min.value) {
                min = runner;
                minprev = walker;
            }
            walker = runner;
            runner = runner.next;
        }
        if(min == this.head) {
            return this;
        }
        minprev.next = min.next;
        min.next = this.head;
        this.head = min;
        return this;
    }

    // Remove the first node with the given value from the list
    removeVal(value) {
        if(this.head == null) {
            console.log("List is empty");
            return this;
        }
        else if(this.head.value == value) {
            this.head = this.head.next;
            return this;
        }
        let runner = this.head;
        let walker = null;
        while(runner != null) {
            if(runner.value == value) {
                walker.next = runner.next;
                return this;
            }
            walker = runner;
            runner = runner.next;
        }
        console.log("Value not found.")
        return this;

    }

    // Write an algorithm that returns the second-to-last value of a Singly Linked List
    secondToLast(){

    }

    // Write an algorithm that, given a second SLL, concatenates it to the end of another SLL
    concat(list2) {
        
    }
}

