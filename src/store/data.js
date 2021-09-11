import BusinessBanner from '../assets/images/business.png';
import CodingBanner from '../assets/images/coding.png';
import StockBanner from '../assets/images/stock.png';
import GolfBanner from '../assets/images/golf.png';
import DanceBanner from '../assets/images/dance.png';
import GameBanner from '../assets/images/game.png';
import JinriTV from '../assets/images/jinritv.png';

const jinriIntro = {
  title: "Hi, I'm JinriTV",
  subtitle: 'Twitch Streamer and Entrepreneur with inspiring community',
  image: JinriTV,
  description:
    'Welcome to jinriTV together with my viewers we like to learn and explore interesting topics including developing/programming apps, learning stock, data analyzing. Also, love doing entertainment such as dancing, mukbang, harp and singing. Also recently started golf'
};

const textCarouselList = [
  {
    name: 'Bendelmonte',
    location: 'NY',
    quote:
      'We are a community bustling with different ideas and dreams to make Jinri Co into a recognizable name on twitch and the world.',
    title: 'Angel Investor Intern'
  },
  {
    name: 'Ziggmoon899',
    location: 'Canada',
    quote: `When you're coming to JinriCo, you will have fun for sure. The primary goal is having fun and I enjoy my time there.`,
    title: 'Intern Caddie'
  },
  {
    name: 'MarktheBoss_',
    location: 'NYC',
    quote: 'Best place to learn about anything and everything.',
    title: 'Entrepreneur'
  }
];

const imageCarouselList = [
  BusinessBanner,
  CodingBanner,
  StockBanner,
  GolfBanner,
  DanceBanner,
  GameBanner
];

export { jinriIntro, textCarouselList, imageCarouselList };
