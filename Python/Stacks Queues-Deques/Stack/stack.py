

# Stack

class Stack:
    def __init__(self):
        self.items = []
    # Check if list is empty
    def isEmpty(self):
        return self.items == []
    # Adds item to end of list
    def push(self, item):
        self.items.append(item)
    # Remove last item from the list
    def pop(self):
        return self.items.pop()
    # Show or Return last item on the list
    def peek(self):
        return self.items[len(self.items) -1]
    # Returns the length or size of the list
    def size(self):
        return len(self.items) 

# Instance of Stack

mystack = Stack()

print(type(mystack)) # checking type
print(mystack.isEmpty()) # returns True is stack is empty

# Pushing

mystack.push('my_string') # push string to stack
print(mystack.isEmpty()) # returns False is stack is not empty
mystack.push(101)

# Size

print(mystack.size()) 

# Peek

print(mystack.peek())

# Remove or Pop

mylast_item = mystack.pop()
print(mylast_item)
print(mystack.peek())
