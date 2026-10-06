

export function alertStructure({displayName, description, priority, arena, status, lon, lat}) {
    return{
        displayName,
        description,
        priority,
        arena,
        status,
        lon,
        lat,
        createdAt: new Date().toISOString()
    }
}