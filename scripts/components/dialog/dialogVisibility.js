import { boxDialog } from "../../constants/htmlConsts.js"

export function updateDialogVisibility({mode}){
    boxDialog.style.display = ['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(mode) ? 'block' : 'none'
}