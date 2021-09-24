import { ReactNode } from "react";

export type UrlParams = {
  speciesId: string;
};

export type DataCollapsableBlockProps = {
  children: any;
  titleImage: any;
  titleLabel: string;
};

export type MainTitleProps = {
  backgroundUrl: string;
  name: string;
  subtitle: string;
};

export type SecondaryTitleProps = {
  title: string;
};

type SpeciesDescritpionFeatures = {
  height: string;
  weight: string;
  skin_color: string;
  hair_color: string;
  eye_color: string;
  facial_features: string;
  birth_rate?: number;
};

export type SpeciesDescriptionProps = {
  data: {
    female: {
      features: any;
    };
    male: {
      features: any;
    };
  };
  description: string[];
  image: any;
};

export type StackContentProps = {
  cssCustomClass?: string;
  children: any;
};

export type SplitContentProps = {
  cssCustomClass?: string;
  children: any;
  even?: boolean;
  reverse?: boolean;
};

export type InlineContentProps = {
  cssCustomClass?: string;
  children: any;
  even?: boolean;
};

export type QuoteContentProps = {
  author: string;
  authorRole?: string;
  cssCustomClas?: string;
  quoteImage: any;
  quoteMessage: string;
  reverse?: boolean;
};

export type DataCarouselProps = {
  cssCustomClass?: string;
  children: any;
  itemToShowIndex: number;
  infinite?: boolean;
};
