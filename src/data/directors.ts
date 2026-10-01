export interface Director {
  id: string;
  name: string;
  role: string;
  representation?: string;
  committee?: string;
  bio: string;
  image: string;
}

export const directors: Director[] = [
  {
    id: "showkat-hossain",
    name: "Dr. Khondaker Showkat Hossain",
    role: "Chairman",
    representation: "Representing Borak Travels (Pvt.) Limited",
    committee: "Audit Committee",
    bio: "Dr. Khondaker Showkat Hossain is a distinguished former civil servant of the Government of Bangladesh with more than 30 years of experience in public administration, management, and policy-making. He served as Secretary to the Ministry of Expatriates' Welfare and Overseas Employment and held key national administrative responsibilities before joining the Board.",
    image: "https://www.nationalhousingbd.com/uploads/images/Khandaker%20Shawkat.jpg",
  },
  {
    id: "shamsul-islam",
    name: "Mr. Mohammad Shamsul Islam",
    role: "Managing Director & CEO",
    committee: "Executive Committee (Ex-officio)",
    bio: "Mr. Mohammad Shamsul Islam has been leading National Housing Finance PLC as Managing Director since July 2021. With over 35 years of senior banking leadership in top commercial banks and NBFIs including Global Islami Bank PLC, he has spearheaded NHFIL's digital transformation, loan portfolio quality, and Islamic banking wing expansion.",
    image: "https://www.nationalhousingbd.com/uploads/images/AMD%20Photo.JPG",
  },
  {
    id: "altaf-hussain",
    name: "Mr. Syed M. Altaf Hussain",
    role: "Vice Chairman",
    representation: "Representing Pragati Insurance Ltd",
    committee: "Executive Committee",
    bio: "Syed M. Altaf Hussain is the Chairman of Pragati Insurance Ltd and founder chairman of Pragati Life Insurance Ltd, possessing over 36 years of distinguished leadership across finance, high-rise building development, industrial crop nutrition, and global trade as Chairman & CEO representing Cargill Inc., USA.",
    image: "https://www.nationalhousingbd.com/uploads/images/1601890149-321693.jpg",
  },
  {
    id: "mahbubur-rahman",
    name: "Mr. Mahbubur Rahman",
    role: "Director (Past Chairman)",
    representation: "Representing Eastland Insurance Co. Ltd.",
    bio: "Mr. Mahbubur Rahman is the President of the International Chamber of Commerce (ICC) - Bangladesh, and Chairman & CEO of ETBL Holdings Ltd. He is the founder Chairman of Eastland Insurance Co. Ltd. and Bangladesh International Arbitration Centre (BIAC), recognized globally for leadership in world business and arbitration.",
    image: "https://www.nationalhousingbd.com/uploads/images/Mahbubur.jpg",
  },
  {
    id: "kazim-uddin",
    name: "Mr. Md. Kazim Uddin",
    role: "Director",
    representation: "Representing National Life Insurance Co. Ltd",
    bio: "A renowned visionary in the life insurance sector in Bangladesh since 1987, Mr. Kazim Uddin serves as the Chief Executive Officer of National Life Insurance Co. Ltd and a leading corporate speaker on organizational governance and institutional fund management.",
    image: "https://www.nationalhousingbd.com/uploads/images/kazim.JPG",
  },
  {
    id: "khaled-mamun",
    name: "Mr. Mohammad Khaled Mamun, FCII (UK)",
    role: "Director",
    representation: "Representing Reliance Insurance PLC",
    committee: "Executive Committee",
    bio: "Chartered Insurance Professional from the Chartered Insurance Institute of London (UK) with over three decades of reinsurance and general insurance leadership, currently serving as the Chief Executive Officer of Reliance Insurance PLC.",
    image: "https://www.nationalhousingbd.com/uploads/images/Khaled%20Mamun-.jpg",
  },
  {
    id: "mohsin-hassan",
    name: "Mr. Md. Mohsin Hassan, FCMA",
    role: "Director",
    representation: "Representing Square Pharmaceuticals PLC",
    committee: "Audit Committee",
    bio: "Fellow Member of ICMAB and seasoned corporate finance professional currently serving as General Manager (Finance & Accounts) at Square Group, guiding institutional governance, treasury management, and audit rigor.",
    image: "https://www.nationalhousingbd.com/uploads/images/Mohsin.jpg",
  },
  {
    id: "moinuddin",
    name: "Mr. A.K.M. Moinuddin, FCA",
    role: "Director",
    representation: "Representing Bangladesh Lamps PLC",
    bio: "Fellow Chartered Accountant with 35+ years of multinational financial and supply chain experience across Transcom Limited, Bangladesh Lamps PLC, and top UK financial institutions.",
    image: "https://www.nationalhousingbd.com/uploads/images/Picture%20of%20A.K.M.%20Moinuddin,%20FCA.jpg",
  },
  {
    id: "azmal-hossain",
    name: "Mr. Azmal Hossain",
    role: "Director",
    representation: "Representing Eastern Insurance Co. Ltd",
    bio: "Vice Chairman of Eastern Insurance Co. Ltd. and Managing Director of Hashem Paper Mills Ltd., bringing extensive manufacturing, real estate development, and corporate insurance leadership.",
    image: "https://www.nationalhousingbd.com/uploads/images/1601891416-27610887.jpg",
  },
  {
    id: "rumee-ali",
    name: "Mr. Muhammad A. (Rumee) Ali",
    role: "Director",
    representation: "Representing Eastland Insurance PLC",
    committee: "Executive Committee",
    bio: "Distinguished former Deputy Governor of Bangladesh Bank and CEO of ANZ Grindlays Bank in Bangladesh. Currently Chairman of ICC Bangladesh Banking Commission, Vice Chairman of BIAC and Friendship, and independent board member of Banglalink Digital Communications.",
    image: "https://www.nationalhousingbd.com/uploads/images/Muhammad%20A.(Rumee)%20Ali.jpg",
  },
  {
    id: "toufic-choudhury",
    name: "Dr. Toufic Ahmad Choudhury",
    role: "Independent Director",
    committee: "Chairman, Audit Committee",
    bio: "Former Director General of Bangladesh Institute of Bank Management (BIBM) and two-term General Secretary of Bangladesh Economic Association. A foremost scholar on financial regulation, inclusive finance, and macroeconomic policy in Bangladesh.",
    image: "https://www.nationalhousingbd.com/uploads/images/1601891756-72692956.jpg",
  },
  {
    id: "mahmuda-begum",
    name: "Ms. Mahmuda Begum",
    role: "Independent Director",
    bio: "Retired Senior Secretary of Bangladesh Civil Service with nearly 40 years of distinguished service in public administration, economic relations division (ERD), development cooperation, and public financial management.",
    image: "https://www.nationalhousingbd.com/uploads/images/Mahmuda%20Begum.jpg",
  },
  {
    id: "shahidul-haque",
    name: "Mr. Mohammad Shahidul Haque",
    role: "Independent Director",
    committee: "Member, Executive Committee",
    bio: "Retired Senior Secretary of Legislative and Parliamentary Affairs Division and former District & Sessions Judge with over 40 years of judicial and legal governance experience.",
    image: "https://www.nationalhousingbd.com/uploads/images/Shahidul.png",
  },
];
