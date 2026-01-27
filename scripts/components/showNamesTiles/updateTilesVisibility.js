import { statsDom } from "../../constants/htmlConsts.js";

export function updateTilesVisibility({mode}) {
    statsDom.style.display = ['LVL'].includes(mode) ? 'block' : 'none';
}