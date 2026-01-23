export function verifyNextTile({ map }, nextPositionY, nextPositionX) {
    const tileY = map[nextPositionY]
    if (tileY === undefined || tileY === null) return false

    const tileX = tileY[nextPositionX]
    if (tileX === undefined || tileX === null) return false

    return true
}