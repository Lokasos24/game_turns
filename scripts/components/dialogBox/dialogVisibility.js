export function updateDialogVisibility({mode}){
    dialogBox.style.display = ['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(mode) ? 'block' : 'none'
}