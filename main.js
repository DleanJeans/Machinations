const MACHINATIONS = 'Machinations/'
const SWF = '.swf'
const urlParams = new URLSearchParams(window.location.search)
const size = urlParams.get('size')
if (size) {
    const file = MACHINATIONS + size + SWF
    console.log(file)
    embed = document.getElementsByTagName('embed')[0]
    embed.src = file
    embed.parentElement.innerHTML = embed.outerHTML
}