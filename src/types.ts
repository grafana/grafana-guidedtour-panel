export interface Step {
  selectBy: 'panelTitle' | 'customTarget';
  panelTitle: string;
  target: string;
  content: string;
}
export interface GuidedTourOptions {
  autoStart: boolean;
  steps: Step[];

  startButtonText: string;
  stopButtonText: string;
  contentAlign: 'left' | 'center' | 'right';

  redirectURL: string;
  redirectURLTitle: string;

  primaryColor: string;
  backgroundColor: string;
  arrowColor: string;
  textColor: string;
}
