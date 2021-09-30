import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { Button, useTheme2 } from '@grafana/ui';
import Joyride, { CallBackProps, Step, STATUS, LIFECYCLE, ACTIONS } from 'react-joyride';
import { getStepSelector } from './core';
import { markdownToHTML } from './utils';
import { getStyles } from './styles';
import { GuidedTourOptions } from './types';

export const GuidedTourPanel = (props: PanelProps<GuidedTourOptions>) => {
  const { options } = props;
  const theme = useTheme2();
  const styles = getStyles(props, theme);
  const [run, setRun] = useState(options.autoStart);
  const steps: Step[] = (options.steps || []).map((step) => {
    return {
      target: getStepSelector(step),
      content: <div className={styles.Steps.Step.Container} dangerouslySetInnerHTML={markdownToHTML(step.content)}></div>,
    };
  });
  const lastButtonText = options.redirectURL && options.redirectURL.length > 0 ? options.redirectURLTitle || 'Next' : 'Finish';
  // This callback method determines what needs to be done after each step
  const joyRideCallback = (data: CallBackProps) => {
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    if ((data.action === ACTIONS.CLOSE && data.lifecycle === LIFECYCLE.COMPLETE) || finishedStatuses.includes(data.status)) {
      setRun(false);
    }
    if (data.action === ACTIONS.NEXT && data.lifecycle === LIFECYCLE.COMPLETE && options.redirectURL && data.index === steps.length - 1) {
      window.location.href = options.redirectURL;
    }
  };
  return (
    <div className={styles.Panel.Wrapper}>
      <div className={styles.Panel.Content}>
        {options.panelContent && <div dangerouslySetInnerHTML={markdownToHTML(options.panelContent)}></div>}
        {!run && <Button onClick={() => setRun(true)}>{options.startButtonText || 'Run tour'}</Button>}
        {run && <Button onClick={() => setRun(false)}>{options.stopButtonText || 'Stop tour'}</Button>}
      </div>
      <div className="guidedtour-step">
        <Joyride
          callback={joyRideCallback}
          steps={steps}
          run={run}
          continuous={true}
          scrollToFirstStep={true}
          scrollOffset={options.scrollOffset || 100}
          showProgress={options.showProgress}
          showSkipButton={options.showSkipButton}
          hideBackButton={options.hideBackButton}
          floaterProps={{ placement: options.floaterPropsPlacement || 'top' }}
          locale={{ last: lastButtonText }}
          styles={styles.JoyRideOptions}
        />
      </div>
    </div>
  );
};
