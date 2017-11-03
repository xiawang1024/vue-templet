//配置文件
//channelLogo
const logoIndex = 10
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '古典音乐广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '2015年8月8日，古典音乐广播（936天籁之音）开播，一首首动听的中外经典名曲，通过FM93.6的电波流入人们心扉。';

const CHANNEL_AUDIO_TEXT_2 = '古典音乐广播是一家以播出古典音乐为主的专业调频广播，旨在满足不同听众的需求，提升大众文化素养，普及高雅音乐，陶冶人们情操，助力“文明河南”建设。';

//two
const CHANNEL_VIDEO = 'http://hndt.com/h5/shows/10/videos/1.mp4';

const CHANNEL_VIDEO_TEXT_1 = '936天籁之音的节目理念是“严肃音乐、通俗传播”。古典音乐广播充分考虑到当代听众的实际需求和收听习惯，标准化、格式化编排，将高雅、经典纯音乐广播化、碎片化呈现，易于车载移动收听。';

//three
const CHANNEL_PICS = [{
        text: '2017漫步经典：国家大剧院管弦乐团“夏夜传说”',
        url: 'http://www.hndt.com/fm/936/1892690/res/vnzDzPEQ.jpg?1499738288241'
    },
    {
        text: '郑州爱乐轻音乐团三周年音乐会周日上演',
        url: 'http://www.hnr.cn/broadcast/fm936/jdt/201609/W020160923570219907672.jpg'
    },
    {
        text: '大型环球经典音乐会《东方之声》在郑演出',
        url: 'http://www.hndt.com/fm/936/6980/res/drylOle9.jpg?1487668875672'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '西方古典音乐家的电影之《魔鬼小提琴家帕格尼尼》',
        url: 'http://www.hndt.com/fm/936/201710/31/1914681/res/RGP9cdil.png?1509495598313'
    },
    {
        text: '经典原版音乐剧《人鬼情未了》即将在郑重现',
        url: 'http://www.hnr.cn/broadcast/fm936/jdt/201611/W020161115387313797185.jpg'
    },
    {
        text: '国家大剧院制作歌剧《图兰朵》',
        url: 'http://www.hnr.cn/broadcast/fm936/jdt/201702/W020170208589806209080.jpg'
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