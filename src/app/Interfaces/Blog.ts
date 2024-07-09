export interface  Blog{
  id: number;
  titre: string;
  text: string;
  date: Date;
  category: string;
  comments: [];
  image: any;
  user: any;
}