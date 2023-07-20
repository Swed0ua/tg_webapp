let tg = window.Telegram.WebApp;
let btn_save = document.querySelector('.btn__save')
let btns_cancel = document.querySelectorAll('.btn__cancel')
let link__input, com__input, hot_pos, work_time
const init_params = () => {
    link__input = document.querySelector('#link__input').value,
    com__input = document.querySelector('#com__input').value,
    hot_pos = document.querySelector('#hot_pos').value,
    work_time = document.querySelector('#work_time').value
}

init_params()


const cancel_app = () => {
    tg.close()
}

const give_params = () => {
    init_params()
    tg.sendData(JSON.stringify({
        "link" : link__input,
        'com_count' : com__input,
        'hot_pos' : hot_pos,
        'time' : work_time
    }))
    cancel_app()
}


btn_save.addEventListener('click', give_params)

btns_cancel.forEach(btn_cancel => {
    btn_cancel.addEventListener('click', cancel_app) 
});