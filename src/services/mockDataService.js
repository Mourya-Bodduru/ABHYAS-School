// Mock data storage and retrieval using LocalStorage

const DEFAULT_BANNERS = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Empowering Future Leaders",
    desc: "Blending traditional values with modern educational methodologies to nurture well-rounded global citizens.",
    published: true
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Interactive Smart Classrooms",
    desc: "Creating an engaging learning atmosphere with advanced digital tools and student-centric methodology.",
    published: true
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Excellence in Sports & Arts",
    desc: "Fostering physical strength, creativity, and team coordination through expert athletic training.",
    published: true
  }
];

const DEFAULT_STATS = [
  { id: 1, value: "20+", label: "Years of Excellence" },
  { id: 2, value: "1500+", label: "Happy Students" },
  { id: 3, value: "100%", label: "CBSE Board Success" },
  { id: 4, value: "50+", label: "Certified Educators" }
];

const DEFAULT_NEWS = [
  {
    id: 1,
    title: "ABHYAS Welcomes New Students for Academic Year 2026-27",
    date: "2026-06-12",
    author: "Admissions Team",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "The campus was filled with excitement as we welcomed our new batch of students during the orientation ceremony.",
    fullContent: "The academic year 2026-27 officially kicked off at ABHYAS School with a grand orientation program for our incoming students and their parents. The event featured inspirational talks by our founders and school administration, introduction of our expert faculty, and a campus walk-through. We are thrilled to welcome our new learners and look forward to a successful and empowering year ahead.",
    published: true
  },
  {
    id: 2,
    title: "Annual Science Exhibition 'Anveshan' Showcases Innovation",
    date: "2026-05-28",
    author: "Science Department",
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Students from all grades presented cutting-edge models on environmental sustainability and robotics.",
    fullContent: "This year's science exhibition, 'Anveshan', witnessed an outstanding displays of ingenuity. From automated smart farming solutions to plastic-eating enzyme prototypes, our students showed exceptional critical thinking. Dr. Robert Vance, chief guest and prominent research scientist, lauded the kids' dedication, emphasizing the importance of young minds addressing contemporary ecological challenges.",
    published: true
  },
  {
    id: 3,
    title: "Inter-School Sports Gala: ABHYAS Bags Championship Trophy",
    date: "2026-05-15",
    author: "Sports Coordinator",
    image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Our sports team dominated in football, table tennis, and athletics, winning the overall championship cup.",
    fullContent: "After a week of intense competition and true sportsmanship, ABHYAS School was crowned the overall champions of the annual Inter-School Sports Gala. Competing against 15 schools in the district, our athletes secured gold in Under-19 Football, Girls' Badminton singles, and the 4x100m relay race. Principal Jenkins congratulated the team and thanked the coaches for their tireless efforts.",
    published: true
  },
  {
    id: 4,
    title: "Expert Seminar on AI & Ethics in Education",
    date: "2026-04-30",
    author: "IT Department",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Distinguished tech experts discussed the role of artificial intelligence in classroom teaching and digital ethics.",
    fullContent: "With technology progressing rapidly, ABHYAS hosted a panel discussion on AI & Ethics in Education. Speakers from top universities joined teachers and students to discuss how tools like generative AI can be integrated responsibly into studies. The consensus highlighted the need to prioritize foundational logic skills and critical research over total dependence on automated tools.",
    published: true
  }
];

const DEFAULT_EVENTS = [
  {
    id: 1,
    title: "International Yoga Day Celebration",
    date: "2026-06-21",
    time: "7:00 AM - 9:00 AM",
    venue: "School Main Playground",
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Join us for a morning of peace and wellness. Our certified instructors will guide students, parents, and teachers through various Asanas and breathing techniques to promote holistic health.",
    category: "upcoming",
    published: true
  },
  {
    id: 2,
    title: "Monsoon Plantation Drive",
    date: "2026-07-05",
    time: "9:00 AM - 1:00 PM",
    venue: "Eco Club & Surrounding Area",
    image: "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "ABHYAS Eco Club is organizing a community sapling plantation drive. We encourage students to adopt a plant, learn about local flora, and contribute towards a greener city.",
    category: "upcoming",
    published: true
  },
  {
    id: 3,
    title: "Annual Sports Meet 2026",
    date: "2026-03-20",
    time: "8:00 AM - 5:00 PM",
    venue: "Sports Complex",
    image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Our annual sports day was celebrated with great vigor. Students participated in athletic track and field events, drills, martial arts demonstrations, and the final march past.",
    category: "past",
    published: true
  },
  {
    id: 4,
    title: "Graduation Ceremony (Class of 2026)",
    date: "2026-04-12",
    time: "4:00 PM - 7:30 PM",
    venue: "Auditorium",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Bidding a warm farewell to our Class 12 batch. The evening was filled with emotional speeches, award distributions for academic excellence, and cultural programs.",
    category: "past",
    published: true
  }
];

const DEFAULT_GALLERY = [
  { id: 1, type: 'photo', category: 'facilities', url: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "School Library Reading Hall", published: true },
  { id: 2, type: 'photo', category: 'academics', url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Students working in computer science lab", published: true },
  { id: 3, type: 'photo', category: 'facilities', url: "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Science Laboratory", published: true },
  { id: 4, type: 'photo', category: 'academics', url: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Interactive Classroom Session", published: true },
  { id: 5, type: 'photo', category: 'facilities', url: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Smart Class Lecture", published: true },
  { id: 6, type: 'photo', category: 'sports', url: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Football Practice Grounds", published: true },
  { id: 7, type: 'photo', category: 'sports', url: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Track Field Athletics Meet", published: true },
  { id: 8, type: 'photo', category: 'events', url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Annual Day Celebrations", published: true },
  { id: 9, type: 'photo', category: 'events', url: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Exhibition Inventions Showcase", published: true },
  { id: 10, type: 'video', category: 'events', url: "nxcoS9qNhS0", thumb: "https://images.pexels.com/photos/1183986/pexels-photo-1183986.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Annual Cultural Program Video", published: true },
  { id: 11, type: 'video', category: 'sports', url: "dQw4w9WgXcQ", thumb: "https://images.pexels.com/photos/163209/soccer-stadium-cup-football-163209.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Championship Football Final Highlights", published: true },
  { id: 12, type: 'video', category: 'academics', url: "nxcoS9qNhS0", thumb: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Science Fair Innovation Pitch Video", published: true }
];

const DEFAULT_FACULTY = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    designation: "Principal",
    qualification: "Ph.D. in Educational Leadership, M.Ed.",
    photo: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "principal@abhyasschool.edu",
    published: true
  },
  {
    id: 2,
    name: "Mr. Ramesh Kumar",
    designation: "Vice Principal & Head of Mathematics",
    qualification: "M.Sc. in Mathematics, B.Ed.",
    photo: "https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "r.kumar@abhyasschool.edu",
    published: true
  },
  {
    id: 3,
    name: "Mrs. Evelyn Carter",
    designation: "Head of Science Department",
    qualification: "M.Sc. in Physics, M.Phil.",
    photo: "https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "e.carter@abhyasschool.edu",
    published: true
  },
  {
    id: 4,
    name: "Mr. David Miller",
    designation: "Senior English Faculty",
    qualification: "M.A. in English Literature, B.Ed.",
    photo: "https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "d.miller@abhyasschool.edu",
    published: true
  },
  {
    id: 5,
    name: "Mrs. Sunita Rao",
    designation: "Computer Science Instructor",
    qualification: "M.Tech in Computer Science",
    photo: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "s.rao@abhyasschool.edu",
    published: true
  },
  {
    id: 6,
    name: "Mr. Carlos Rodriguez",
    designation: "Physical Education Director",
    qualification: "M.P.Ed. in Physical Education",
    photo: "https://images.pexels.com/photos/8612196/pexels-photo-8612196.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "c.rodriguez@abhyasschool.edu",
    published: true
  }
];

const DEFAULT_ACHIEVEMENTS = [
  {
    id: 1,
    category: "student",
    title: "State Level Debate Winners",
    image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Our students clinched the 1st prize at the inter-state debate championship.",
    published: true
  },
  {
    id: 2,
    category: "academic",
    title: "Best Science Innovation",
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Awarded for the most sustainable environmental project at the National Science Fair.",
    published: true
  },
  {
    id: 3,
    category: "sports",
    title: "Sports Championship Cup",
    image: "https://images.pexels.com/photos/163209/soccer-stadium-cup-football-163209.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Under-19 Football team brought home the regional championship cup.",
    published: true
  },
  {
    id: 4,
    category: "student",
    title: "Excellence in Arts",
    image: "https://images.pexels.com/photos/1183986/pexels-photo-1183986.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Top honors received at the Annual National Arts Exhibition.",
    published: true
  },
  {
    id: 5,
    category: "academic",
    title: "100% Board Results",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Achieved a consecutive 5th year of 100% pass rate in standard 10 and 12 boards.",
    published: true
  },
  {
    id: 6,
    category: "school",
    title: "Community Service Award",
    image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Recognized by the city council for outstanding student-led social service initiatives.",
    published: true
  },
  {
    id: 7,
    category: "school",
    title: "National Clean Campus Award",
    image: "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Awarded the cleanest and greenest school campus trophy in the district ranking.",
    published: true
  },
  {
    id: 8,
    category: "sports",
    title: "Individual Swimming Gold",
    image: "https://images.pexels.com/photos/8612196/pexels-photo-8612196.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Junior class swimmer secured the gold medal in the 100m freestyle at the State Aquatic Meet.",
    published: true
  }
];

const DEFAULT_DOWNLOADS = [
  { id: 1, category: "calendar", title: "Academic Calendar 2026-27 (Term I)", date: "2026-06-01", size: "1.2 MB", link: "#", published: true },
  { id: 2, category: "calendar", title: "Parent-Teacher Meeting Schedule 2026", date: "2026-06-05", size: "450 KB", link: "#", published: true },
  { id: 3, category: "calendar", title: "Annual Event and Holidays List 2026-27", date: "2026-05-20", size: "850 KB", link: "#", published: true },
  { id: 4, category: "circulars", title: "Reopening Circular for Academic Session 2026-27", date: "2026-06-10", size: "320 KB", link: "#", published: true },
  { id: 5, category: "circulars", title: "Circular regarding New School Uniform Guidelines", date: "2026-05-25", size: "680 KB", link: "#", published: true },
  { id: 6, category: "circulars", title: "Instructions for School Bus Safety Regulations", date: "2026-05-12", size: "520 KB", link: "#", published: true },
  { id: 7, category: "syllabus", title: "Syllabus - Grade XII Board Exam Prep", date: "2026-06-08", size: "2.1 MB", link: "#", published: true },
  { id: 8, category: "syllabus", title: "Syllabus - Secondary Classes (IX & X) 2026-27", date: "2026-06-05", size: "1.8 MB", link: "#", published: true },
  { id: 9, category: "syllabus", title: "Syllabus - Middle School (VI - VIII) 2026-27", date: "2026-06-02", size: "1.5 MB", link: "#", published: true },
  { id: 10, category: "other", title: "School Transport Route Details & Fees", date: "2026-06-07", size: "900 KB", link: "#", published: true },
  { id: 11, category: "other", title: "Admission Registration & Inquiry Guidelines", date: "2026-05-15", size: "1.1 MB", link: "#", published: true },
  { id: 12, category: "other", title: "Medical Declaration and Consent Form", date: "2026-05-10", size: "250 KB", link: "#", published: true }
];

const DEFAULT_CONTACT = {
  address: "123 Education Lane, Knowledge Park, Cityville, State, 12345",
  phone: "+1 (234) 567-8900",
  altPhone: "+1 (234) 567-8901",
  email: "info@abhyasschool.edu",
  altEmail: "admissions@abhyasschool.edu",
  facebook: "#",
  twitter: "#",
  instagram: "#",
  linkedin: "#",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.18693015574!2d83.5496475!3d18.2930577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bf51fd86c9d27%3A0x5c73b5482220911d!2sAbhyas%20School%2C%20A%20Center%20For%20Excellence%2C%20IIT%20JEE%20Foundation!5e0!3m2!1sen!2sin!4v1781195909684!5m2!1sen!2sin",
  footerCopyright: "ABHYAS School. All rights reserved. Designed for Excellence."
};

const DEFAULT_LEADERSHIP = {
  chairmanMessage: "Since inception, our goal has been clear: to build an educational institution that prepares children for life, not just for exams. We invest heavily in cutting-edge laboratory resources, top-tier sports academies, and smart learning tools to ensure that our students are never left behind in a fast-paced digital world. We believe that with the right direction and ethics, every child has the capacity to lead.",
  principalMessage: "Education is not just about academic excellence; it is about character building. At ABHYAS School, we are committed to providing a safe, supportive, and highly engaging environment where every child can discover their true potential, ask questions freely, and flourish into a responsible global citizen. We welcome you to experience this journey of learning and discovery with us."
};

const DEFAULT_ENQUIRIES = [
  { id: 1, type: "admission", name: "Rahul Sen", studentName: "Aarav Sen", dob: "2020-05-14", grade: "Primary (I-V)", phone: "9876543210", email: "rahul.sen@example.com", message: "Inquiring about school bus availability on North Route.", status: "pending", date: "2026-06-12" },
  { id: 2, type: "contact", name: "Deepika Patel", phone: "9988776655", email: "deepika@example.com", message: "Would love to know timings for the swimming pool training.", status: "resolved", date: "2026-06-10" }
];

// Helper to initialize LocalStorage data
export const initializeData = () => {
  const init = (key, defaultData) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(defaultData));
    }
  };

  init('abhyas_banners', DEFAULT_BANNERS);
  init('abhyas_stats', DEFAULT_STATS);
  init('abhyas_news', DEFAULT_NEWS);
  init('abhyas_events', DEFAULT_EVENTS);
  init('abhyas_gallery', DEFAULT_GALLERY);
  init('abhyas_faculty', DEFAULT_FACULTY);
  init('abhyas_achievements', DEFAULT_ACHIEVEMENTS);
  init('abhyas_downloads', DEFAULT_DOWNLOADS);
  init('abhyas_contact', DEFAULT_CONTACT);
  init('abhyas_leadership', DEFAULT_LEADERSHIP);
  init('abhyas_enquiries', DEFAULT_ENQUIRIES);
};

// Initialize right away
initializeData();

// Generic helper methods
export const getResource = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const setResource = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const addRecord = (key, record) => {
  const data = getResource(key);
  const newRecord = { ...record, id: Date.now() };
  data.push(newRecord);
  setResource(key, data);
  return newRecord;
};

export const updateRecord = (key, id, updatedFields) => {
  const data = getResource(key);
  const idx = data.findIndex(item => item.id === Number(id));
  if (idx > -1) {
    data[idx] = { ...data[idx], ...updatedFields };
    setResource(key, data);
    return data[idx];
  }
  return null;
};

export const deleteRecord = (key, id) => {
  const data = getResource(key);
  const filtered = data.filter(item => item.id !== Number(id));
  setResource(key, filtered);
};
