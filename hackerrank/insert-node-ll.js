/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    if (head == null) {
        head = new Node();
        head.data = data;
    }
    else {
        current = head;
        while (current.next) {
            current = current.next;
        }
        var node = new Node(data);
        current.next = node;
    }
    return head;
}
