const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "toki",
        artist: 'hideyuki hashimoto',
        url: 'http://music.163.com/song/media/outer/url?id=28679443.mp3',
        cover: 'http://p2.music.126.net/J1K37kRTg8GNQ6cCYhvuWQ==/5899979394913533.jpg',
      },
      {
        name: "rain",
        artist: 'nekoboro',
        url: 'http://music.163.com/song/media/outer/url?id=29713218.mp3',
        cover: 'http://p1.music.126.net/XQ0apoeD66MvCdhpcBtByg==/3239161255748471.jpg',
      },
      {
        name: 'eau',
        artist: 'yutaka hirasaka',
        url: 'http://music.163.com/song/media/outer/url?id=29535887.mp3',
        cover: 'http://p2.music.126.net/LCdM92m31k6my2G5Qkidhw==/6622358534995240.jpg',
      },
      {
        name: 'arne',
        artist: 'haruka nakamura',
        url: 'http://music.163.com/song/media/outer/url?id=4904298.mp3',
        cover: 'http://p2.music.126.net/sM0gbClGYFr4r6NXy_77_Q==/857619069688801.jpg',
      },
      {
        name: "alone,,again",
        artist: 'elijah who',
        url: 'http://music.163.com/song/media/outer/url?id=495218039.mp3',
        cover: 'http://p2.music.126.net/qJRzJOtNhcPlkTaljwI-0w==/19106213556171653.jpg',
      }
    ]
});