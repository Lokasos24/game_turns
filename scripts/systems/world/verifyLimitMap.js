export function verifyLimitMap({ map }, nextPositionY, nextPositionX) {
    const nextTile = map[nextPositionY]?.[nextPositionX]
    if (nextTile === undefined || nextTile === null) return false

    return true
}