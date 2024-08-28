import { Component } from '@angular/core';
import { CommonModule } from '@angular/common' // para usar comandos ng no html
import { PostComponent } from '../post/post.component'; 

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.sass'
})
export class FeedComponent {
  activeTab: string = 'forYou';

  setActiveTab(tab: string) {
    this.activeTab = tab; 
  }

  posts = [
    {
      profile_pic: '../assets/feed-assets/user-images/amit_pic.jpg',
      user_name: 'Amit Das',
      title: 'Your portfolio is stopping you from getting that job',
      description: 'An intense way to learn about the process and practice your design skills — My 1st hackathon. Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio continues to grow, I realized the importance of crafting a compelling story that showcases not only my skills but also my problem-solving abilities.',
      date: 'Sep 9, 2024',
      likes: '31K',
      comments: '294',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/max_pic.jpg',
      user_name: 'Max Adams',
      title: 'Melody mobile app: a UI UX case study',
      description: 'The Melody mobile app case study explores the intricate process of designing a music app that caters to the needs of both casual listeners and music enthusiasts. The focus was on creating a user-friendly interface that offers seamless navigation and personalized playlists. From the initial user research to the final user testing, this case study highlights the importance of iterative design and user feedback in developing a successful product.',
      date: 'Nov 10, 2024',
      likes: '6.7K',
      comments: '58',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/brian_pic.jpg',
      user_name: 'Brian Neff',
      title: 'The Power of Minimalist Design in User Interfaces',
      description: 'Minimalist design is more than just a trend; it is a powerful tool for enhancing user experience. By focusing on essential elements and removing clutter, minimalist design helps users navigate interfaces more intuitively and with fewer distractions. In this post, I delve into the principles of minimalist design and how they can be effectively applied to create interfaces that are not only visually appealing but also highly functional.',
      date: 'Oct 15, 2024',
      likes: '8.4K',
      comments: '109',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/max_pic.jpg',
      user_name: 'Jane Doe',
      title: 'Understanding the Psychology Behind Color Choices in UI Design',
      description: 'Color choices in UI design are not merely aesthetic decisions; they are deeply rooted in psychology. Different colors evoke different emotions and can significantly impact user behavior. This post explores the psychology behind color choices and how designers can use color theory to create more engaging and effective interfaces.',
      date: 'Aug 22, 2024',
      likes: '5.2K',
      comments: '76',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/max_pic.jpg',
      user_name: 'Alex Turner',
      title: 'Designing for Accessibility: What Every Designer Needs to Know',
      description: 'Accessibility is a crucial aspect of UI/UX design that ensures digital products are usable by everyone, including people with disabilities. This post covers the fundamentals of designing for accessibility, including the importance of contrast, font size, and navigational elements that are accessible to screen readers. By understanding these principles, designers can create more inclusive experiences.',
      date: 'Jul 10, 2024',
      likes: '9.3K',
      comments: '184',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/max_pic.jpg',
      user_name: 'Emma Watson',
      title: 'Breaking Down the Basics of Information Architecture',
      description: 'Information architecture is the backbone of any digital product, defining the structure and organization of content. This post breaks down the basics of information architecture, from creating user flows to developing sitemaps. Understanding these concepts is key to designing products that are easy to navigate and provide a seamless user experience.',
      date: 'Jun 30, 2024',
      likes: '12.1K',
      comments: '217',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/max_pic.jpg',
      user_name: 'David Johnson',
      title: 'The Role of Micro-Interactions in Enhancing User Engagement',
      description: 'Micro-interactions are subtle animations or visual cues that enhance user engagement and provide feedback during interactions. This post explores the role of micro-interactions in user experience design and how they can make a significant difference in user satisfaction and retention. Learn how to effectively implement micro-interactions in your designs to create more dynamic and interactive experiences.',
      date: 'May 20, 2024',
      likes: '7.8K',
      comments: '152',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/max_pic.jpg',
      user_name: 'Lucy Smith',
      title: 'From Concept to Prototype: The Journey of Creating a New App',
      description: 'Creating a new app involves a journey from concept to prototype, requiring a deep understanding of user needs, market trends, and technical feasibility. This post provides insights into the process of bringing an app idea to life, from initial brainstorming sessions to wireframing, prototyping, and user testing. Discover the key steps and challenges involved in turning a concept into a fully functional prototype.',
      date: 'Apr 15, 2024',
      likes: '10.4K',
      comments: '203',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
    {
      profile_pic: '../assets/feed-assets/user-images/max_pic.jpg',
      user_name: 'Mark Allen',
      title: 'How to Use User Feedback to Drive Design Decisions',
      description: 'User feedback is a valuable resource for driving design decisions and improving product usability. This post discusses the importance of gathering user feedback, the different methods for collecting it, and how to analyze the data to make informed design choices. By leveraging user feedback, designers can create products that better meet the needs and expectations of their audience.',
      date: 'Mar 18, 2024',
      likes: '11.2K',
      comments: '178',
      post_pic: '../assets/feed-assets/post-images/woman_cellphone.svg' 
    },
  ];
}
