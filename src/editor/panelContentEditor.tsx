import React from 'react';
import { TextArea } from '@grafana/ui';
import { StandardEditorProps } from '@grafana/data';

export const PanelContentEditor = ({ value, onChange }: StandardEditorProps<string>) => {
  return <TextArea rows={3} value={value} onChange={(e) => onChange(e.currentTarget.value)}></TextArea>;
};
