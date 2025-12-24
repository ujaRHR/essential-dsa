// Singly Linked List and Some common patterns to solve problems

package main

import "fmt"

type Node struct {
	val  int
	next *Node
}

func Constructor() *Node {
	return nil
}

// Push Front (as Head)
func pushFront(head *Node, val int) *Node {
	newNode := &Node{val: val}
	newNode.next = head
	return newNode
}

// Push back (as Tail)
func pushBack(head *Node, val int) *Node {
	newNode := &Node{val: val}

	if head == nil {
		return newNode
	}

	curr := head
	for curr.next != nil {
		curr = curr.next
	}

	curr.next = newNode
	return head
}

func showList(head *Node) {
	curr := head
	elements := []int{}

	for curr != nil {
		elements = append(elements, curr.val)
		curr = curr.next
	}

	fmt.Println(elements)
}

func reverseList(head *Node) *Node {
	var prev *Node
	curr := head

	for curr != nil {
		next := curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
}

func main() {
	var head *Node

	head = pushFront(head, 20)
	head = pushBack(head, 30)
	head = pushBack(head, 40)
	head = pushFront(head, 10)

	showList(head)

	head = reverseList(head)
	showList(head)
}
