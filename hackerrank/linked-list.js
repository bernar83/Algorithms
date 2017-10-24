function print(head) {
    // if input head is not null
    if (head != null) {
        
        // initialize cursor to head of list
        var cursor = head;
        
        // show head's data
        console.log(cursor.data);
        
        // point cursor to next node as long as it's not null
        while (cursor.next != null) {
            cursor = cursor.next;
            
            // show the data where cursor is at
            console.log(cursor.data);
        }
    }
}
