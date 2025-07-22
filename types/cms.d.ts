// Services
export interface ServicesType {
  id: number;
  Cards: {
    id: number;
    Title: string;
    Description: string;
    Image: {
      id: number;
      url: string;
      alternativeText?: string;
    };
    Icon: {
      id: number;
      url: string;
      alternativeText?: string;
    };
    Youtube_Videos?: { id: number; Title: string; URL: string }[];
    Audio_Files?: { id: number; url: string; alternativeText?: string }[];
    Text_Flip?: { id: number; Title: string }[];
  }[];
}

// AboutUs
export interface AboutUsType {
  id: number;
  Description?: string;
  Image?: {
    url: string;
    alternativeText?: string;
  };
}

// ContactUs
export interface ContactUsType {
  id: number;
  Highlight?: string;
  Title: string;
  Description?: string;

  Social_Media?: {
    Twitter?: string;
    Facebook?: string;
    Instagram?: string;
    Whatsapp?: string;
  };
}

export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Blog
export interface BlogType {
  id: number;
  Title: string;
  Content: BlocksContent;
  Image: {
    url: string;
    alternativeText?: string;
  };
  Category?: {
    id: number;
    Name: string;
  }[];
  Slug: string;
}

// Page
export interface PageType {
  id: number;
  Title: string;
  List: {
    Title: string;
    Subtitle?: string;
    Description: string;
  }[];
}
