import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie,hasCookie, setCookie } from 'cookies-next';

// const languages = [
//     {label: 'English', value:'/auto/en'},
//     {label: `Русский`, value:'/auto/ru'},
// {label: 'Polski', value:'/auto/pl'} ];

const Translate = (___) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        let addScript = <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    })
}

const [selected, setSelected] = useState(null)

useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
}, [])

if(hasCookie('googtrans')){
    setSelected(getCookie('googtrans'))
    }
else{
    setSelected('/auto/en')
}

const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
        pageLanguage: 'auto',
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
        'google_translate_element');
}

const langChange=(e,m,evt)=>{
    evt.preventDefault()
    if(hasCookie('googtrans')){
    setCookie('googtrans',decodeURI(e))
    setSelected(e)
    }
    else{
    setCookie('googtrans',e)
    setSelected(e)
    }
    window.location.reload()
    }

return (
    <>
        <div id="google_translate_element" style={{width:'0px',height:'0px',position:'absolute',left:'50%',zIndex:-99999}}></div>
        <SelectPicker 
            data={languages} 
            style={{ width: 100 }} 
            placement="bottomEnd"
            cleanable={false}
            value={selected}
            searchable={false}
            className={'notranslate'}
            menuClassName={'notranslate'}
            onSelect={(e,m,evt) => langChange(e,m,evt)}
            placeholder="Lang"/> 
    </>

)


