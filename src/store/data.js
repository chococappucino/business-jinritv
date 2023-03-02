import JinriTV from '../assets/images/jinritv.png';
import Chart1 from '../assets/images/chart1.png';
import Chart2 from '../assets/images/chart2.png';
import Chart3 from '../assets/images/chart3.png';
import Chart4 from '../assets/images/chart4.png';
import Twiri from '../assets/images/mascot.png';

const jinriIntro = {
  title: 'Who am I?',
  subtitle: 'Twitch Streamer and Entrepreneur with inspiring community',
  image: JinriTV,
  description:
    'Welcome to jinriTV together with my viewers we like to learn and explore interesting topics including developing/programming apps, learning stock, data analyzing. Also, love doing entertainment such as dancing, mukbang, harp and singing. Also recently started golf'
};

const carouselList = [
  {
    name: 'Bendelmonte',
    location: 'New York City',
    quote:
      'We are a community bustling with different ideas and dreams to make Jinri Co into a recognizable name on twitch and the world.',
    title: 'Angel Investor Intern',
    image: Chart1
  },
  {
    name: 'Ziggmoon899',
    location: 'Canada',
    quote: `When you're coming to JinriCo, you will have fun for sure. The primary goal is having fun and I enjoy my time there.`,
    title: 'Intern Caddie',
    image: Chart2
  },
  {
    name: 'MarktheBoss_',
    location: 'New York City',
    quote: 'Best place to learn about anything and everything.',
    title: 'Entrepreneur',
    image: Chart3
  },
  {
    name: 'Minz',
    location: 'New York City',
    quote:
      'An unconventional place to grow and learn about a variety of topics with like-minded peers in a new and entertaining way.',
    title: 'Designer / Streamer',
    image: Chart4
  }
];

const productList = [
  {
    name: 'Twiri',
    desc: "This is a webpage that matches viewers/streamers to a streamer to watch or collab with based on the question for your preference. The questions will be regarding the characteristics and nature of the streamer and the stream.\nThis was Jinri's first product with more than 20+ viewers working on it simultaneously.",
    image: Twiri,
    url: 'https://www.twiri.net'
  },
  {
    name: 'RNG Station',
    desc: "This is a random generating app that picks a random subway station to travel to. Currently, it is only based in Korea, but with lot's of support, we plan on moving this to other countries that has subway stations.\nI wanted to tour around Korea in a unique way, so one of my EU intern (YMF292) decided to create a rough sketch that randomly picks the subway. Later on, other intern (Seyther) helped out with the frontend so that I could use it in my YT videos",
    image: Twiri,
    url: ''
  },
  {
    name: 'IRL Guest command generator',
    desc: "Creates the guest command that could be copied and pased for those who don't have mods.\nEver since boss decided to not have mods in her channel, it was a pain in the a** to change the guest command every time... (though, wonder why viewers would randomly come to the channel asking who they are...) so because it was annoying, intern N********* created a scuffed version of this and will be updated and prettified by other interns :)",
    image: Twiri,
    url: 'IRLGenerator.html?sora629=Sora&hachubby=Hachu&yummy_2=Yummy&wowowww0=%EC%9A%B0%EA%B8%B0%EC%9E%89&mintcandy25=%EC%84%B8%ED%98%84&jaemi_fun=%EC%9E%AC%EB%AF%B8&okheeji=Heeji&url_youarel=%EC%9C%A0%EC%95%84%EB%A0%90&bubbly_live=Bubbly&lessa_tv=Lessa '
  }
];

const twitchLink = 'https://www.twitch.tv/jinritv';
const discordLink = 'https://www.discord.gg/jinritv';

export { jinriIntro, carouselList, productList, twitchLink, discordLink };
