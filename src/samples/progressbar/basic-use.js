export class BasicUse {

  progressbars = [];

  bind(ctx) {
    this.progressbars.push(this.fastAndFurious);
    this.progressbars.push(this.nowYouSeeMe);
    this.progressbars.push(this.theHelp);
    this.progressbars.push(this.theInternship);
    this.progressbars.push(this.thePerks);
  }

  castVote() {
    let first = this.favouriteMovie1.value();
    let second = this.favouriteMovie2.value();
    let third = this.favouriteMovie3.value();

    if (first !== '' && second !== '' && third !== '' && first !== second && second !== third && first !== third) {
      this.progressbars.forEach(pb => {
        pb.value(0);
      });

      this.theInternship.value(50);
      this.fastAndFurious.value(30);
      this.nowYouSeeMe.value(10);

      this.progressbars.forEach(pb => {
        if (pb.value() === 0) {
          pb.value(5);
        }
      });
    } else {
      alert('Please select three different movies');
    }
  }
}
