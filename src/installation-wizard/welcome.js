import {inject} from 'aurelia-dependency-injection';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Welcome {
  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate() {
    this.wizardConfig.title = 'Installation wizard';
  }
}
