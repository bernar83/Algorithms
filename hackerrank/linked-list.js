function print(head) {
    if (head != null) {
        var cursor = head;
        while (cursor.next != null) {
            console.log(cursor.data);
            cursor = cursor.next;
        }
    }
}
