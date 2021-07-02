import { PanelPlugin } from '@grafana/data';
import { GuidedTourPanel } from './GuidedTourPanel';
import { StepEditorOption } from './editor/stepsEditor';
import { PanelContentEditor } from './editor/panelContentEditor';
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
    .addColorPicker({
      path: 'panelBackgroundColor',
      name: 'Control Panel Background color',
      defaultValue: 'transparent',
      category: ['Tour Settings'],
    })
    .addTextInput({
      path: 'panelBackgroundImage',
      name: 'Control Panel background image url',
      description: 'optional',
      category: ['Tour Settings'],
    })
    .addColorPicker({
      path: 'panelTextColor',
      name: 'Control Panel Text color',
      defaultValue: 'white',
      category: ['Tour Settings'],
    })
    .addCustomEditor({
      id: 'panelContent',
      path: 'panelContent',
      name: 'Controller content',
      description: 'Optional',
      category: ['Tour Settings'],
      editor: PanelContentEditor,
    })
    .addCustomEditor(StepEditorOption)
    .addColorPicker({
      path: 'primaryColor',
      name: 'Primary Color',
      defaultValue: '#F05A28',
      category: ['Tour Style'],
    })
    .addColorPicker({
      path: 'backgroundColor',
      name: 'Background Color',
      category: ['Tour Style'],
    })
    .addColorPicker({
      path: 'arrowColor',
      name: 'Arrow Color',
      category: ['Tour Style'],
    })
    .addColorPicker({
      path: 'textColor',
      name: 'Text Color',
      category: ['Tour Style'],
    })
    .addRadio({
      path: 'contentAlign',
      name: 'Content Align',
      defaultValue: 'center',
      category: ['Tour Style'],
      settings: {
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'showProgress',
      name: 'Show Progress ex:(1/4)',
      defaultValue: false,
      category: ['Tour Style'],
    })
    .addBooleanSwitch({
      path: 'showSkipButton',
      name: 'Show skip button',
      defaultValue: true,
      category: ['Tour Style'],
    })
    .addBooleanSwitch({
      path: 'hideBackButton',
      name: 'Hide back button',
      defaultValue: false,
      category: ['Tour Style'],
    })
    .addNumberInput({
      path: 'scrollOffset',
      name: 'Scroll offset',
      defaultValue: 100,
      category: ['Tour Style'],
    })
    .addRadio({
      path: 'floaterPropsPlacement',
      name: 'Floater placement',
      defaultValue: 'bottom',
      category: ['Tour Style'],
      settings: {
        options: [
          { label: 'Top', value: 'top' },
          { label: 'Bottom', value: 'bottom' },
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'Right' },
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
