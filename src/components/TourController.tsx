import React from 'react';
import { Button } from '@grafana/ui';
import { MarkdownRenderer } from './MarkdownRenderer';
import { normalizeColor } from './../utils';

export const TourController = (props: {
  panelContent?: string;
  panelTextColor?: string;
  panelBackgroundColor?: string;
  panelBackgroundImage?: string;
  startButtonText?: string;
  stopButtonText?: string;
  className?: string;
  run: boolean | undefined;
  setRun: (s: boolean) => void;
}) => {
  const { run, setRun } = props;
  return (
    <div
      className={props.className}
      style={{
        padding: '20px',
        color: normalizeColor(props.panelTextColor),
        backgroundColor: normalizeColor(props.panelBackgroundColor) || 'transparent',
        backgroundImage: props.panelBackgroundImage ? `url("${props.panelBackgroundImage}")` : '',
      }}
    >
      {props.panelContent && <MarkdownRenderer content={props.panelContent} />}
      {!run && <Button onClick={() => setRun(true)}>{props.startButtonText || 'Run tour'}</Button>}
      {run && <Button onClick={() => setRun(false)}>{props.stopButtonText || 'Stop tour'}</Button>}
    </div>
  );
};
