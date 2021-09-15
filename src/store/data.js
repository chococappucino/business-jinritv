import JinriTV from '../assets/images/jinritv.png';
import Chart1 from '../assets/images/chart1.png';
import Chart2 from '../assets/images/chart2.png';
import Chart3 from '../assets/images/chart3.png';
import Chart4 from '../assets/images/chart4.png';

const jinriIntro = {
  title: "Hi, I'm JinriTV",
  subtitle: 'Twitch Streamer and Entrepreneur with inspiring community',
  image: JinriTV,
  description:
    'Welcome to jinriTV together with my viewers we like to learn and explore interesting topics including developing/programming apps, learning stock, data analyzing. Also, love doing entertainment such as dancing, mukbang, harp and singing. Also recently started golf'
};

const carouselList = [
  {
    name: 'Bendelmonte',
    location: 'NY',
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
    location: 'NYC',
    quote: 'Best place to learn about anything and everything.',
    title: 'Entrepreneur',
    image: Chart3
  },
  {
    name: 'Minz',
    location: 'NYC',
    quote:
      'An unconventional place to grow and learn about a variety of topics with like-minded peers in a new and entertaining way.',
    title: 'Designer / Streamer',
    image: Chart4
  }
];

const twitchLink = 'https://www.twitch.tv/jinritv';
const discordLink = 'https://www.discord.gg/jinritv';

export { jinriIntro, carouselList, twitchLink, discordLink };
