import { GrafanaTheme2, PanelProps } from '@grafana/data';
import { normalizeColor } from './utils';
import { GuidedTourOptions } from './types';

export const getJoyRideStyles = (panelProps: PanelProps<GuidedTourOptions>, theme: GrafanaTheme2) => {
  const { options } = panelProps;
  return {
    options: {
      width: options.width || '',
      zIndex: theme.zIndex.modal + 100,
      primaryColor: normalizeColor(options.primaryColor) || '#F05A28',
      backgroundColor: normalizeColor(options.backgroundColor) || theme.colors.background.canvas,
      arrowColor: normalizeColor(options.arrowColor) || theme.colors.background.primary,
      textColor: normalizeColor(options.textColor) || theme.colors.text.primary,
    },
  };
};
