import React from 'react';
import { renderMarkdown } from '@grafana/data';

export const MarkdownRenderer = (props: { content: string; className?: string; style?: React.CSSProperties }) => {
  const { content, className = '', style = {} } = props;
  return <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} className={className} style={style}></div>;
};
