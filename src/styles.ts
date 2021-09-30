import { css } from 'emotion';
import { GrafanaTheme2, PanelProps } from '@grafana/data';
import { normalizeColor } from './utils';
import { GuidedTourOptions } from './types';

export const getStyles = (panelProps: PanelProps<GuidedTourOptions>, theme: GrafanaTheme2) => {
  const { options, width, height } = panelProps;
  return {
    Panel: {
      Wrapper: css`
        position: relative;
        width: ${width}px;
        height: ${height}px;
      `,
      Content: css`
        padding: '20px';
        color: ${normalizeColor(options.panelTextColor)};
        background-color: ${normalizeColor(options.panelBackgroundColor) || 'transparent'};
        background-image: ${options.panelBackgroundImage ? `url("${options.panelBackgroundImage}")` : ''};
      `,
    },
    Steps: {
      Step: {
        Container: css`
          text-align: ${options.contentAlign || 'left'};
          background-image: ${options.backgroundImage ? `url("${options.backgroundImage}")` : ''};
        `,
      },
    },
    JoyRideOptions: {
      options: {
        width: options.width || '',
        zIndex: theme.zIndex.modal + 100,
        primaryColor: normalizeColor(options.primaryColor) || '#F05A28',
        backgroundColor: normalizeColor(options.backgroundColor) || theme.colors.background.canvas,
        arrowColor: normalizeColor(options.arrowColor) || theme.colors.background.primary,
        textColor: normalizeColor(options.textColor) || theme.colors.text.primary,
      },
    },
  };
};
