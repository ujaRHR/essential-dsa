# Singly Linked List and Some common patterns to solve problems


class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def push_front(self, val):
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node

    def push_back(self, val):
        new_node = Node(val)

        if self.head is None:
            self.head = new_node
            return

        curr = self.head
        while curr.next is not None:
            curr = curr.next

        curr.next = new_node

    def show_list(self):
        curr = self.head
        elements = []

        while curr:
            elements.append(curr.val)
            curr = curr.next

        print(elements)

    def reverse_list(self):
        prev = None
        curr = self.head

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp

        self.head = prev


list = SinglyLinkedList()
list.push_front(30)
list.push_back(40)
list.push_back(50)
list.push_front(20)
list.push_back(60)
list.push_front(10)
list.show_list()
list.reverse_list()
list.show_list()
