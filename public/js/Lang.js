var lang = undefined;
(async ()=>{
    if(lang) return;
    lang = await ( await fetch(`/lang/${navigator.language.substring(0,2).toLowerCase()}.json`)).json()
    console.log(lang)
})()
