import tkinter as tk

root = tk.Tk()
frame = tk.Frame(root)
frame.pack()


button = tk.Button(
    frame,
    text='Click Here',
    fg='blue',
    command=lambda:print('Hello from button!'))

button.pack(side=tk.LEFT)
root.mainloop()

