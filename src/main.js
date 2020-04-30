//模块化 把不这里不相关的或独立的代码放到独立的文件在引入进来

import string from './css'
const player = {
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    id: undefined,
    time: 100,
    n: 1,
    //初始化
    events: {
        //不能再声明对象的时候用对象 '#btnPause': player.pause,像这个一样所以需要改
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        //绑定事件
        player.bindEvents()
        //播放
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            //为了不受有可能某个程序员写了一个对象继承的key，所以写个防御编程，只有是我自伤属性才可以执行
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]//pause/paly/slow/normal/fast
                document.querySelector(key).onclick = player[value]

            }

        }

    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        //在控制台输入demo.scrollHeight就能知道它滚动的高度
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()

    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },

}

player.init()