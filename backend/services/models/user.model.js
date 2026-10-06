export function userStructure({ username, password, email, role, assignedArena }) {
    return{
        username,
        password,
        email,
        role,
        assignedArena,
        createdAt: new Date().toISOString()
    }
}