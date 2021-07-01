import React from 'react';
import { cloneDeep, set } from 'lodash';
import { PanelOptionsEditorItem } from '@grafana/data';
import { Button, Input, TextArea, Select, InlineFormLabel } from '@grafana/ui';
import { Step } from './../types';

interface StepEditorProps {
  value: Step[];
  onChange: (value: Step[]) => void;
}
export const StepEditor: React.FC<StepEditorProps> = ({ value: steps, onChange }) => {
  const addStep = () => {
    const newSteps: Step[] = cloneDeep(steps || []);
    newSteps.push({
      selectBy: 'panelTitle',
      panelTitle: 'Panel Title',
      target: '',
      content: 'my awesome guided tour',
    });
    onChange(newSteps);
  };
  const onStepRemove = (index: number) => {
    const newSteps: Step[] = cloneDeep(steps || []);
    newSteps.splice(index, 1);
    onChange(newSteps);
  };
  const onValueChange = (key: string, value: string | boolean) => {
    const newSteps: Step[] = cloneDeep(steps || []);
    set(newSteps, key, value);
    onChange(newSteps);
  };
  return (
    <>
      {steps.map((step, index) => (
        <>
          <h5>Step {index + 1}</h5>
          <div className="gf-form">
            <InlineFormLabel>Target</InlineFormLabel>
            <Select
              options={[
                { value: 'panelTitle', label: 'Panel' },
                // { value: 'customTarget', label: 'Custom CSS Target' },
              ]}
              value={step.selectBy}
              onChange={e => onValueChange(`${index}.selectBy`, e.value + '')}
            />
          </div>
          {step.selectBy === 'panelTitle' && (
            <div className="gf-form">
              <InlineFormLabel>Target Panel Title</InlineFormLabel>
              <Input
                css={{}}
                value={step.panelTitle}
                onChange={e => onValueChange(`${index}.panelTitle`, e.currentTarget.value)}
              />
            </div>
          )}
          {step.selectBy === 'customTarget' && (
            <div className="gf-form">
              <InlineFormLabel>CSS Selector</InlineFormLabel>
              <Input
                css={{}}
                value={step.target}
                onChange={e => onValueChange(`${index}.target`, e.currentTarget.value)}
              />
            </div>
          )}
          <div className="gf-form">
            <InlineFormLabel>Guided Tour Content</InlineFormLabel>
            <TextArea
              css={{}}
              value={step.content}
              rows={3}
              onChange={e => onValueChange(`${index}.content`, e.currentTarget.value)}
            />
          </div>
          <div className="gf-form">
            <Button
              icon="trash-alt"
              variant="secondary"
              size="sm"
              style={{ margin: '5px' }}
              onClick={() => onStepRemove(index)}
            >
              Remove step
            </Button>
          </div>
          <br />
        </>
      ))}
      <br />
      {<Button onClick={addStep}>Add Step</Button>}
    </>
  );
};
export const StepEditorOption: PanelOptionsEditorItem = {
  id: 'steps',
  name: '',
  path: 'steps',
  category: ['Steps'],
  editor: StepEditor,
  defaultValue: [],
};
