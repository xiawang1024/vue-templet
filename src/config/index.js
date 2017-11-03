//配置文件
//channelLogo
const logoIndex = 1
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '河南新闻广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '';

const CHANNEL_AUDIO_TEXT_2 = '新闻广播全天候贯穿整点新闻和服务资讯，是资讯的高地，民意的窗口，担负着党委政府政令传达、舆论引导的重要政治任务。主要听众为20岁-50岁的政府官员、企业管理者、公务员、白领、高校学者、知识分子。他们关注新闻，他们热爱活动，丰富及时的资讯使他们在运筹帷幄中更添自信和从容，新闻广播是受众收听倾向最为强烈的广播媒体之一。';

//two
const CHANNEL_VIDEO = 'http://www.hndt.com/fm/954/201708/07/1897761/res/1uTCq0ay.mp4';

const CHANNEL_VIDEO_TEXT_1 = '新闻广播目前采用中波657、调频95.4、调频102.3三频发射，全省覆盖率达96%以上。其中中波300千瓦的发射率，让新闻广播傲视群雄，响彻中原！';

//three
const CHANNEL_PICS = [{
        text: '河南新闻广播交通安全大讲堂正式开讲！',
        url: 'http://www.hndt.com/fm/954/201710/27/1913991/res/qlUIG5ak.jpg?1509089987042'
    },
    {
        text: '秋风起，蟹脚痒，一起抓大闸蟹啦！',
        url: 'http://www.hndt.com/fm/954/201710/23/1912900/res/32edFH62.jpg?1508724869467'
    },
    {
        text: '这个秋天，与作家林清玄来一场最美的相遇！',
        url: 'http://www.hndt.com/fm/954/201709/15/1905648/res/duHhe99y.jpg'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '河南新闻广播主持人约您亲手为家人制作中秋月饼!',
        url: 'http://www.hndt.com/fm/954/201709/15/1905646/res/EAPrwLA7.jpg'
    },
    {
        text: '河南新闻广播“遇见美好”单身烧烤联谊派对',
        url: 'http://www.hndt.com/fm/954/201709/15/1905644/res/2VMV2keX.jpg'
    },
    {
        text: '牙好，胃口才好！新闻广播带“小牙医”给父母做检查',
        url: 'http://www.hndt.com/fm/954/201709/17/1906069/res/nBwCwbcY.jpg?1505642357131'
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