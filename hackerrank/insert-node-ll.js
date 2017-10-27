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
    if (head === null) {
        var node = new Node(data);
        head = node;
        return head;
    }
    else {
        cursor = head;
        while (cursor.next) {
            cursor = cursor.next;
        }
        cursor.next = new Node(data);
        console.log(cursor);
        return cursor;
    }
}
