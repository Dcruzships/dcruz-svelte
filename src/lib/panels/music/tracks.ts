export class Track {
  src: string;
  artist: string;
  name: string;
  album: string;
  img: string;

  constructor(src: string, artist: string, name: string, album: string, img: string)
  {
    this.src = src;
    this.artist = artist;
    this.name = name;
    this.album = album;
    this.img = img;
  }
}

export class Album {
  name: string;
  src: string;
  artist: string;

  constructor(name: string, src: string, artist?: string) {
    this.name = name;
    this.src = src;
    this.artist = (artist) ? artist : name;
  }
}

export const albums: Album[] = [
  new Album("2022", 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/paint.png', "Captain Brando!"),
  new Album("ily", 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/ily.png', "Captain Brando!"),
  new Album("RIP", 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/rip.png', "Captain Brando!"),
  new Album("Altona Meadows", 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png', "Altona Meadows"),
  new Album("Cigs Inside Live", 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/cigs.png', "Cigs Inside"),
  new Album("Criss Cross Apple Sauwce", 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/dead.png', "brando & theo"),
  new Album("3RR0R 404", 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png', "???"),
];

export const tracks: Track[] = [
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/IDKOK.mp3',
    'Captain Brando!',
    'IDK OK',
    "ily",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/ily.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/Instagram.mp3',
    'Captain Brando!',
    'Instagram',
    'ily',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/ily.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/him.mp3',
    'Captain Brando!',
    'him',
    'ily',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/ily.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/october13.mp3',
    'Captain Brando!',
    'October 13th',
    'ily',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/ily.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/him(demo).mp3',
    'Captain Brando!',
    'him (demo)',
    'ily',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/ily.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/down3-2.mp3',
    'Captain Brando!',
    'down3-2',
    'RIP',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/rip.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/paralyzed.mp3',
    'Captain Brando!',
    'Paralyzed Paraplegic',
    'RIP',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/rip.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/GiveIn.mp3',
    'Captain Brando!',
    'GiveIn_444',
    'RIP',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/rip.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/mental.mp3',
    'Captain Brando!',
    'mental health disorders',
    'RIP',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/rip.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/stab.mp3',
    'Captain Brando!',
    'stab.wav',
    'RIP',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/rip.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/WAITAMINUTE.mp3',
    'Captain Brando!',
    'WAITAMINUTE',
    'RIP',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/rip.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/bargainbin.mp3',
    'Altona Meadows',
    'Bargain Bin',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bargainbin.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/bbetc.mp3',
    'Altona Meadows',
    'Better Better, etc.',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/bullshit.mp3',
    'Altona Meadows',
    'bullshit.mp3',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/jam2.mp3',
    'Altona Meadows',
    'jam2.mp3',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/feel.mp3',
    'Altona Meadows',
    'Feel It Still (remix)',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/passion.mp3',
    'Altona Meadows',
    'Passionfruit (remix)',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/assignment8.mp3',
    'Altona Meadows',
    'assignment8.mp3',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/panama.mp3',
    'Altona Meadows',
    'The Panama Papers',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/kenny.mp3',
    'Altona Meadows',
    'kenny.mp3',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/old/better44.mp3',
    'Altona Meadows',
    'better44.mp3',
    'Altona Meadows',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/bulkhead.mp3',
    'Captain Brando!',
    'BULKHEAD',
    '2022',
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/cigs/alone.mp3',
    'Cigs Inside',
    'Alone (Mac DeMarco Cover)',
    "Cigs Inside Live",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/cigs.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/cigs/how.mp3',
    'Cigs Inside',
    'How?',
    "Cigs Inside Live",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/cigs.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/cigs/work.mp3',
    'Cigs Inside',
    'Work This Time (King Gizzard Cover)',
    "Cigs Inside Live",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/cigs.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/cigs/liquor.mp3',
    'Cigs Inside',
    'Liquor Laced & Lucid',
    "Cigs Inside Live",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/cigs.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/cigs/sleepwalk.mp3',
    'Cigs Inside',
    'Sleepwalk With Me',
    "Cigs Inside Live",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/cigs.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/2022/drrrrrumerrrrrrr.mp3',
    'Captain Brando!',
    'drrrrrumerrrrrrr.mp3',
    "2022",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/paint.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/2022/somewhere.mp3',
    'Captain Brando!',
    'somewhere.mp3',
    "2022",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/paint.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/2022/comeback.mp3',
    'Captain Brando!',
    '(dont call it a) comeback!',
    "2022",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/paint.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/2022/whereyougoin.mp3',
    'Captain Brando!',
    'where you goin? (demo)',
    "2022",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/paint.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/2022/kernalPanic.mp3',
    'Captain Brando!',
    'kernal PANIC !!!',
    "3RR0R 404",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/2022/paralyzedIn.mp3',
    'Captain Brando!',
    'Paralyzed (instrumental)',
    "3RR0R 404",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/2022/PARALLEL.mp3',
    'Captain Brando!',
    'PARALLEL',
    "3RR0R 404",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/crossed/intro.mp3',
    'brando & theo',
    'intro',
    "Criss Cross Apple Sauwce",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/dead.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/crossed/uponme.mp3',
    'brando & theo',
    'up on me',
    "Criss Cross Apple Sauwce",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/dead.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/crossed/what.mp3',
    'brando & theo',
    '..what?',
    "Criss Cross Apple Sauwce",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/dead.png'
  ),
  new Track(
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/crossed/recess.mp3',
    'brando & theo',
    'recess',
    "Criss Cross Apple Sauwce",
    'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/dead.png'
  ),
];