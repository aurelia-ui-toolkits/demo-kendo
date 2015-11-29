import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

@inject(Router)
export class WizardConfig {

  currentPage = 'welcome';
  nextPage = 'version';

  constructor(router) {
    this.router = router;
  }

  reset() {
    this.currentPage = 'welcome';
    this.nextPage = 'version';
  }

  // previous() {
  //   let currentStep = +this.currentStep;
  //
  //   if(currentStep == 1) return;
  //
  //   this._goToStep(currentStep - 1);
  // }
  //
  // next() {
  //   let currentStep = +this.currentStep;
  //   let lastStep = +this.lastStep;
  //
  //   if((currentStep + 1) > lastStep) return;
  //
  //   this._goToStep(currentStep + 1);
  // }

  _goToStep(page) {
      this.router.navigateToRoute('install', {
        page: page
      });
  }
}
