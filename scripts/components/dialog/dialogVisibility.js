export function updateDialogVisibility({mode}, dialogBox){
    dialogBox.style.display = ['STORY', 'STORY_EVENT', 'RECLUT_EVENT'].includes(mode) ? 'block' : 'none'
}