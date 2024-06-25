export interface User {
    id?: string,
    name: string,
    avatar: string
}


export interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string
}

export interface newTask{
    
        title: string,
        summary:string,
        date: string
      
}