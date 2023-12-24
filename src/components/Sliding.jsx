import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel/slick/slick";
import './Sliding.css';

const Sliding = () => {
  useEffect(() => {
    const initializeSlider = () => {
      var $slider = $(".slideshow .slider"),
        maxItems = $(".item", $slider).length,
        dragging = false,
        tracking,
        rightTracking;

      $slider.addClass("slideshow-left");

      $(".slideshow-left").slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        infinite: true,
        dots: true,
        speed: 1000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      })
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if (
          currentSlide > nextSlide &&
          nextSlide === 0 &&
          currentSlide === maxItems - 1
        ) {
          $(".slideshow-right .slider").slick("slickGoTo", -1);
          $(".slideshow-text").slick("slickGoTo", maxItems);
        } else if (
          currentSlide < nextSlide &&
          currentSlide === 0 &&
          nextSlide === maxItems - 1
        ) {
          $(".slideshow-right .slider").slick("slickGoTo", maxItems);
          $(".slideshow-text").slick("slickGoTo", -1);
        } else {
          $(".slideshow-right .slider").slick(
            "slickGoTo",
            maxItems - 1 - nextSlide
          );
          $(".slideshow-text").slick("slickGoTo", nextSlide);
        }
      })
    //   .on("mousewheel", function (event) {
    //     // Check if the mousewheel event is directly on the slider
    //     if ($(event.target).hasClass("slick-track")) {
    //       event.preventDefault();
    //       if (event.deltaX > 0 || event.deltaY < 0) {
    //         $(this).slick("slickNext");
    //       } else if (event.deltaX < 0 || event.deltaY > 0) {
    //         $(this).slick("slickPrev");
    //       }
    //     }
    //   })
    //   .on("mousedown touchstart", function (event) {
    //     dragging = true;
    //     tracking = $(".slick-track", $slider).css("transform");
    //     tracking = tracking && tracking.split ? parseInt(tracking.split(",")[5]) : 0;
    //     rightTracking = $(".slideshow-right .slick-track").css("transform");
    //     rightTracking = rightTracking && rightTracking.split ? parseInt(rightTracking.split(",")[5]) : 0;
    //   })
    //   .on("mousemove touchmove", function (event) {
    //     if (dragging) {
    //       var newTracking = $(".slideshow-left .slick-track").css("transform");
    //       newTracking = newTracking && newTracking.split ? parseInt(newTracking.split(",")[5]) : 0;
    //       if (tracking !== undefined && rightTracking !== undefined) {
    //         var diffTracking = newTracking - tracking;
    //         $(".slideshow-right .slick-track").css({
    //           transform: "matrix(1, 0, 0, 1, 0, " + (rightTracking - diffTracking) + ")",
    //         });
    //       }
    //     }
    //   })
    //   .on("mouseleave touchend mouseup", function (event) {
    //     dragging = false;
    //   });

      // Right slider initialization
      $(".slideshow-right .slider").slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 950,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        initialSlide: maxItems - 1,
      });

      // Text slider initialization
      $(".slideshow-text").slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 900,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
      });
    };

    initializeSlider();

    // Cleanup on component unmount
    return () => {
      $('.slideshow-left, .slideshow-right .slider, .slideshow-text').slick('unslick');
    };
  }, []);

  return (
    <>
    <h1 className="slideshowtitle">ENJOY THE SLIDE</h1>
    <div className="split-slideshow">
      <div className="slideshow">
        <div className="slider">
          <div className="item">
            <img src="https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1610171912188-49b8e7f3fad7?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1521900092653-4bf38fcd896a?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1700669465712-31711e4ea5c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1547533456-07321515b4fd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1615281144933-17ae60439da2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1470922792794-b15b12d20e80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
      <div className="slideshow-text">
        <div className="item">Boeing 777</div>
        <div className="item">Desert</div>
        <div className="item">Erosion</div>
        <div className="item">Shape</div>
        <div className="item">O'Hare Airpot</div>
        <div className="item">Desert</div>
        <div className="item">Singapore Airport</div>
        <div className="item">Enjoy The View</div>
        <div className="item">Enjoy The View</div>
        <div className="item">Enjoy The View</div>
      </div>
    </div>
    </>
  );
};

export default Sliding;


