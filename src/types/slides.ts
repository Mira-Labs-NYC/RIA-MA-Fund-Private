import type { ReactNode } from 'react';

export type TitleSlide = {
  type: 'title';
  title?: string;
  subtitle?: string;
  content: ReactNode;
};

export type ContentSlide = {
  type: 'content';
  title: string;
  subtitle?: string;
  content: ReactNode;
};

export type SlideDefinition = TitleSlide | ContentSlide;
