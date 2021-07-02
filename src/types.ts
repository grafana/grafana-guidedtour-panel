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
  panelTextColor: string;
  panelBackgroundColor: string;
  panelBackgroundImage: string;
  panelContent: string;

  redirectURL: string;
  redirectURLTitle: string;

  contentAlign: 'left' | 'center' | 'right';
  primaryColor: string;
  backgroundColor: string;
  backgroundImage: string;
  arrowColor: string;
  textColor: string;
  scrollOffset: number;
  showProgress: boolean;
  showSkipButton: boolean;
  hideBackButton: boolean;

  floaterPropsPlacement: 'top' | 'bottom' | 'left' | 'right';
}
