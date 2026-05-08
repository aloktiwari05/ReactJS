import ContentCard from "./ContentCard.jsx";

const contents = [
  {
    "thumbnail": "https://picsum.photos/seed/video1/640/360",
    "channelLogo": "https://picsum.photos/seed/logo1/100/100",
    "title": "Building a Modern React Dashboard from Scratch",
    "channelName": "CodeCraft Studio",
    "views": "1.2M views",
    "published": "2 days ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video2/640/360",
    "channelLogo": "https://picsum.photos/seed/logo2/100/100",
    "title": "Top 10 Hidden Travel Destinations in Asia",
    "channelName": "Nomad Trails",
    "views": "845K views",
    "published": "1 week ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video3/640/360",
    "channelLogo": "https://picsum.photos/seed/logo3/100/100",
    "title": "I Tried Coding with AI for 30 Days",
    "channelName": "Dev Simplified",
    "views": "3.8M views",
    "published": "2 months ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video4/640/360",
    "channelLogo": "https://picsum.photos/seed/logo4/100/100",
    "title": "The Science Behind Black Holes Explained",
    "channelName": "Quantum Zone",
    "views": "692K views",
    "published": "1 year ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video5/640/360",
    "channelLogo": "https://picsum.photos/seed/logo5/100/100",
    "title": "Minimalist Desk Setup Tour 2026",
    "channelName": "Workspace Weekly",
    "views": "421K views",
    "published": "2 days ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video6/640/360",
    "channelLogo": "https://picsum.photos/seed/logo6/100/100",
    "title": "Street Food Around Mumbai You Must Try",
    "channelName": "Foodie Lens",
    "views": "2.4M views",
    "published": "1 week ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video7/640/360",
    "channelLogo": "https://picsum.photos/seed/logo7/100/100",
    "title": "Beginner’s Guide to Investing in 2026",
    "channelName": "Finance Hub",
    "views": "510K views",
    "published": "2 months ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video8/640/360",
    "channelLogo": "https://picsum.photos/seed/logo8/100/100",
    "title": "Epic Gaming Highlights Compilation",
    "channelName": "Pixel Arena",
    "views": "6.7M views",
    "published": "1 year ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video9/640/360",
    "channelLogo": "https://picsum.photos/seed/logo9/100/100",
    "title": "How to Master CSS Animations",
    "channelName": "Frontend Lab",
    "views": "934K views",
    "published": "2 days ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video10/640/360",
    "channelLogo": "https://picsum.photos/seed/logo10/100/100",
    "title": "Morning Routine of Successful Entrepreneurs",
    "channelName": "Rise & Grind",
    "views": "1.1M views",
    "published": "1 week ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video11/640/360",
    "channelLogo": "https://picsum.photos/seed/logo11/100/100",
    "title": "Can Electric Cars Really Save the Planet?",
    "channelName": "Future Drive",
    "views": "778K views",
    "published": "2 months ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video12/640/360",
    "channelLogo": "https://picsum.photos/seed/logo12/100/100",
    "title": "The Complete Photography Masterclass",
    "channelName": "Lens Academy",
    "views": "2.9M views",
    "published": "1 year ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video13/640/360",
    "channelLogo": "https://picsum.photos/seed/logo13/100/100",
    "title": "Testing Viral TikTok Life Hacks",
    "channelName": "Daily Experiments",
    "views": "4.5M views",
    "published": "2 days ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video14/640/360",
    "channelLogo": "https://picsum.photos/seed/logo14/100/100",
    "title": "Learn Node.js in One Hour",
    "channelName": "Backend Bros",
    "views": "1.7M views",
    "published": "1 week ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video15/640/360",
    "channelLogo": "https://picsum.photos/seed/logo15/100/100",
    "title": "Inside the World’s Smartest Homes",
    "channelName": "Tech Vision",
    "views": "880K views",
    "published": "2 months ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video16/640/360",
    "channelLogo": "https://picsum.photos/seed/logo16/100/100",
    "title": "Meditation Music for Deep Focus",
    "channelName": "Zen Sounds",
    "views": "12M views",
    "published": "1 year ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video17/640/360",
    "channelLogo": "https://picsum.photos/seed/logo17/100/100",
    "title": "AI vs Human Art Challenge",
    "channelName": "Creative Clash",
    "views": "2.2M views",
    "published": "2 days ago"
  },
  {
    "thumbnail": "https://picsum.photos/seed/video18/640/360",
    "channelLogo": "https://picsum.photos/seed/logo18/100/100",
    "title": "Top 5 Budget Smartphones Reviewed",
    "channelName": "Gadget Central",
    "views": "640K views",
    "published": "1 week ago"
  }
];

const ContentSection = () => {
    return (
        <div className="w-11/12 h-screen flex flex-wrap gap-2 overflow-y-auto overflow-x-hidden p-2 pb-10">
                {contents.map((content, index) => (
                   <ContentCard key={index} content={content}/> 
                ))}
        </div>
    );
}

export default ContentSection;