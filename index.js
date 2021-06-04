// Import stylesheets
import "./style.css";

class Stack {
  constructor() {
    this.data = []
    this.top = 0;
  }

  push(value) {
    this.data[this.top] = value;
    this.top = this.top + 1;
    return this
  }
  pop() {
    if(this.isEmpty()) {
      return "Empty stack"
    }
    this.data.pop()
    this.top = this.top - 1;
  }
  length() {
    return this.data.length
  }
  isEmpty() {
    if(this.length() == 0) {
      return true
    }
  }

  print() {
    console.log(this.data)
  }
}

const undo = new Stack();
const redo = new Stack();

redo.push(45)
redo.push(45)
redo.pop()
redo.print()

const editor = document.getElementById("editor");

editor.addEventListener("keydown", ev => {
  if (ev.ctrlKey && ev.key === "z") {
    ev.preventDefault();
    // Here is where we're going to link the undo functionality
    // with the front-end.  In this event listener, we need to
    // edit the contents of the editor (ev.target.value) with
    // the last item from the stack.



    // Don't forget!  We also have to make sure we're loading
    // our redo stack as well!
  } else if (ev.ctrlKey && ev.key === "r") {
    ev.preventDefault();
    // Just like you did with the undo functionality, link your redo
    // stack functionality here!  Remember!  We want to set
    // (ev.target.value) with your value from your redo stack.

    // Don't forget!  We also need to make sure we're loading
    // our UNDO stack as well!
  } else {
    // Else we should just send ev.target.value to our undo object!
    
    
  }
});