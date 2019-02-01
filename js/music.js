const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "rain",
        artist: 'sasanomaly',
        url: 'http://s.chitoseyono.com/rain.mp3',
        cover: 'http://p1.music.126.net/XQ0apoeD66MvCdhpcBtByg==/3239161255748471.jpg',
      },
      {
        name: "neru",
        artist: 'chitose yono',
        url: 'http://s.chitoseyono.com/neru.mp3',
        cover: 'https://avatar.csdnimg.cn/B/7/0/1_chitoseyono.jpg',
      },
      {
        name: 'eau',
        artist: 'yutaka hirasaka',
        url: 'http://s.chitoseyono.com/eau.mp3',
        cover: 'http://p2.music.126.net/LCdM92m31k6my2G5Qkidhw==/6622358534995240.jpg',
      },
      {
        name: 'arne',
        artist: 'haruka nakamura',
        url: 'http://s.chitoseyono.com/arne.mp3',
        cover: 'http://p2.music.126.net/sM0gbClGYFr4r6NXy_77_Q==/857619069688801.jpg',
      },
      {
        name: "toki",
        artist: 'hideyuki hashimoto',
        url: 'https://raw.githubusercontent.com/ChitoseYono/chitoseyono.github.io/master/medias/music/toki.mp3',
        cover: 'http://p2.music.126.net/J1K37kRTg8GNQ6cCYhvuWQ==/5899979394913533.jpg',
      },
      {
        name: "alone,,again",
        artist: 'elijah who',
        url: 'http://s.chitoseyono.com/who.mp3',
        cover: 'http://p2.music.126.net/qJRzJOtNhcPlkTaljwI-0w==/19106213556171653.jpg',
      }
    ]
});