//配置文件
//channelLogo
const logoIndex = 7
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '私家车广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '私家车广播是隶属于河南广播电视台的专业广播。私家车广播的前身是旅游广播。2012年，经过华丽转身和蜕变，这家城市广播成为河南省第一家“私家车电台”。私家车999—一个全新的呼号，成为河南广播一个响亮的名字、闪光的品牌。';

const CHANNEL_AUDIO_TEXT_2 = '私家车广播是一家有品位、有追求、有责任、有影响的省级电台。';

//two
const CHANNEL_VIDEO = 'http://hndt.com/h5/shows/07/videos/1.mp4';

const CHANNEL_VIDEO_TEXT_1 = '高速发展的城市交通、日益壮大的私家车人群，使广播再现辉煌，重回强势媒体的同时，催生了“私家车广播FM99.9”，成为我省广播史上第一个定位私家车的广播频率。';


//three
const CHANNEL_PICS = [{
        text: '中国好司机之高速公路亿万公里零违法挑战赛在郑州启动',
        url: 'http://www.hndt.com/fm/999/201708/08/1898108/res/c3MggwnE.jpg?1502414489407'
    },
    {
        text: '私家车999联合通视传媒送出万元七夕大礼包',
        url: 'http://www.hndt.com/fm/999/201708/28/1901646/res/wBTeOumR.jpg?1503888293153'
    },
    {
        text: '私家车999第十届时光音乐节',
        url: 'http://www.hndt.com/fm/999/201709/25/1907368/res/o00Q8ycD.jpg'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '私家车999就来此购美食商城正式上线',
        url: 'http://www.hndt.com/fm/999/201708/04/1897366/res/gKN9OcmA.png?1502679979079'
    },
    {
        text: '河南财经政法大学文化传播学院在私家车广播建立实习基地',
        url: 'http://www.hndt.com/fm/999/201711/01/1914824/res/3VhuZuuX.jpg?1509507550259'
    },
    {
        text: '私家车999“9要甜蜜蜜，5所畏惧”生日大party',
        url: 'http://www.hndt.com/fm/999/1904713/res/cfGnUOPs.jpg'
    }
]

export {
    CHANNEL_LOGO,
    CHANNEL_TITLE,
    CHANNEL_AUDIO,
    CHANNEL_AUDIO_TEXT_1,
    CHANNEL_AUDIO_TEXT_2,
    CHANNEL_VIDEO,
    CHANNEL_VIDEO_TEXT_1,
    CHANNEL_PICS,
    CHANNEL_PICS_2
}