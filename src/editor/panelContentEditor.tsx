import React from 'react';
import { TextArea } from '@grafana/ui';
import { StandardEditorProps } from '@grafana/data';

export const PanelContentEditor: React.FC<StandardEditorProps<string>> = ({ value, onChange }) => {
  return <TextArea css={{}} rows={3} value={value} onChange={e => onChange(e.currentTarget.value)}></TextArea>;
};
