export function verifyIsUnitMove({drawX, drawY, moved}, {y, x}){
    return drawX === x && drawY === y || moved
}