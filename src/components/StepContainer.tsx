import React from 'react';
import { MarkdownRenderer } from './MarkdownRenderer';
import * as CSS from 'csstype';

export const StepContainer = (props: {
  content: string;
  className?: string;
  contentAlign?: CSS.Property.TextAlign;
  backgroundImage?: string;
}) => {
  const { content, className, contentAlign = 'left', backgroundImage } = props;
  return (
    <MarkdownRenderer
      content={content}
      className={className}
      style={{
        textAlign: contentAlign,
        backgroundImage: backgroundImage ? `url("${backgroundImage}")` : '',
      }}
    />
  );
};
