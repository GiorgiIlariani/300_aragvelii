export interface updateUserProps {
    name: String;
    path: String;
    pubgUsername: String;
    pubgId: String;
    userId: String;
    bio: String;
    image: String;
}

export interface createNewsProps {
    author: string;
    title: string;
    content: string;
    id: string;
    url: string;
    path: string;
    images: string[]
}



export interface  EditedNewsProps {
  author: string;
  content: string;
  createdAt: Date;
  id: string;
  images: string[];
  title: string;
  url: string;
}