import { PanelPlugin } from '@grafana/data';
import { GuidedTourPanel } from './GuidedTourPanel';
import { StepEditorOption } from './editor/stepsEditor';
import { GuidedTourOptions } from './types';

export const plugin = new PanelPlugin<GuidedTourOptions>(GuidedTourPanel).setPanelOptions(builder => {
  return builder
    .addBooleanSwitch({
      path: 'autoStart',
      name: 'Auto start',
      defaultValue: false,
      category: ['Tour Settings'],
    })
    .addTextInput({
      path: 'startButtonText',
      name: 'Start button text',
      defaultValue: 'Start tour',
      category: ['Tour Settings'],
    })
    .addTextInput({
      path: 'stopButtonText',
      name: 'Stop button text',
      defaultValue: 'Stop tour',
      category: ['Tour Settings'],
    })
    .addCustomEditor(StepEditorOption)
    .addColorPicker({
      path: 'primaryColor',
      name: 'Primary Color',
      defaultValue: '#F05A28',
      category: ['Style'],
    })
    .addColorPicker({
      path: 'backgroundColor',
      name: 'Background Color',
      category: ['Style'],
    })
    .addColorPicker({
      path: 'arrowColor',
      name: 'Arrow Color',
      category: ['Style'],
    })
    .addColorPicker({
      path: 'textColor',
      name: 'Text Color',
      category: ['Style'],
    })
    .addRadio({
      path: 'contentAlign',
      name: 'Content Align',
      defaultValue: 'center',
      category: ['Style'],
      settings: {
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ],
      },
    })
    .addTextInput({
      path: 'redirectURL',
      name: 'Next URL',
      category: ['Last Page'],
      description: '(optional) URL of the page needs to redirected after last step',
    })
    .addTextInput({
      path: 'redirectURLTitle',
      name: 'Next URL Title',
      category: ['Last Page'],
      description: '(optional) Title to be shown in the last step',
      showIf: options => {
        return options.redirectURL && options.redirectURL.length > 0 ? true : false;
      },
    });
});
