function Slider(slider) {
    if (!slider) {
      throw new Error("Gallery element should be passed!");
    }
  
     this.sliderContainer = slider.querySelector(".slider-track");
     this.numberSliders = slider.querySelectorAll(".slide").length;
     this.sliderContainerWidth = this.sliderContainer.clientWidth;
      this.slidersWidth = (this.numberSliders - 1) * this.sliderContainerWidth;
  
     this.position = 0;
  
     this.prevButton = slider.querySelector(".btn-prev");
     this.nextButton = slider.querySelector(".btn-next");
     this.showNextContent = this.showNextContent.bind(this); 
     this.showPrevContent = this.showPrevContent.bind(this);
  
     this.nextButton.addEventListener("click", this.showNextContent);
     this.prevButton.addEventListener("click", this.showPrevContent);
  }
    
  Slider.prototype.showContent = function showContent(width) {
    this.sliderContainer.style = `transform: translateX(-${width}px)`;
  }

  Slider.prototype.showNextContent = function showNextContent() {
    this.position = this.position + this.sliderContainerWidth;
    if (this.position <= this.slidersWidth) {
      this.showContent(this.position);
    } else {
        this.position = 0;
        this.showContent(this.position); 
    }
  }
  Slider.prototype.showPrevContent = function showPrevContent() {
   
    this.position = this.position - this.sliderContainerWidth;

    if (this.position >= 0) {
      this.showContent(this.position);
    } else {
    
      this.position = this.slidersWidth;
      this.showContent(this.position);
    }
  }
   
     const slider1 = new Slider(document.querySelector(".slider1"));
     const slider2 = new Slider(document.querySelector(".slider2"));

     