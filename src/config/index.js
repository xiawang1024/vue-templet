//配置文件
//channelLogo
const logoIndex = 3
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '戏曲广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '“娱乐976”前身为河南电台戏曲广播，2014年元月1日转型改主打娱乐，拥有巨大的影响力：2016年5月 72小时好戏唱不停•挑战世界纪录；2016年9月 中国豫剧首创吉尼斯世界纪录；连续两届“河之南”文化娱乐风尚盛典；公益品牌“大石桥有戏”“福塔有戏”“欧安乐龄有戏”已成功举办150余期，累计观众100万＋；开拍“中原历史文化名人少儿系列剧”；成立“月阳工作室”......';


const CHANNEL_AUDIO_TEXT_2 = '';

//two
const CHANNEL_VIDEO = 'http://www.hndt.com/h5/shows/03/videos/1.mp4';

const CHANNEL_VIDEO_TEXT_1 = '娱乐广播转型至今在社会上产生广泛影响。赛立信数据调查显示：娱乐976全省收听率稳居前五；而郑州地区车载收听调查权威公司尼尔森调查显示：娱乐976排名进入前十。';


//three
const CHANNEL_PICS = [{
        text: '月阳工作室一周岁啦！“好戏连台”邀您品赏祥符陈韵！',
        url: 'http://www.hndt.com/fm/976/201708/11/1898681/res/ykIhMokA.jpg'
    },
    {
        text: '豫南曲剧名丑要来欧安乐龄有戏，本周六看曲剧经典《三子争父》',
        url: 'http://www.hndt.com/fm/976/201711/02/1915091/res/lnjm54yM.jpg'
    },
    {
        text: '976福塔有戏 & 中原百姓大舞台|这个重阳节，好戏连台等您来',
        url: 'http://www.hndt.com/fm/976/201710/30/1914285/res/NDk3PmY8.jpg'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '坠剧《小姑贤》“引爆”欧安乐龄有戏，内黄女笑星情牵郑州戏迷',
        url: 'http://www.hndt.com/fm/976/201710/19/1912307/res/RMIczlOo.jpg'
    },
    {
        text: '我听广播看大戏|《泪洒相思地》王怜娟被逼跳入西湖还是太湖内',
        url: 'http://www.hndt.com/fm/976/201710/11/1910275/res/RZFo9Ace.jpg'
    },
    {
        text: '爱心少年行-爱逗小天使走进郑州儿童福利院',
        url: 'http://www.hndt.com/fm/976/201708/24/1901092/res/EWvT0FsG.jpg'
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