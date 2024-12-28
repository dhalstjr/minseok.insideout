$(function () {
  const visualTL = gsap.timeline({
    // 타임라인의 기본 세팅
    defaults: { duration: 2, ease: "power4.inOut" },
  });

  //   비주얼 화면 가리기
  visualTL.set(".visual .slide2", { opacity: 0 });

  visualTL.from(".visual", { scale: 0.8 });
  visualTL.from(".visual .slide", { scale: 1.5 }, "<" /* 동시에 시작 */);

  visualTL.to(".visual .slide1", {
    autoAlpha: 0,
    duration: 3,
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });

  visualTL.to(
    ".visual .slide2",
    {
      autoAlpha: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    },
    "<"
  );

  // 클립 섹션 효과
  document.querySelectorAll(".clip").forEach((clip) => {
    gsap.from(clip, {
      opacity: 0, // 초기 투명도
      y: 0, // 아래에서 시작
      duration: 1.5, // 애니메이션 지속 시간
      ease: "power2.out", // 부드러운 애니메이션
      scrollTrigger: {
        trigger: clip, // 트리거 대상
        start: "top 70%", // 화면의 80% 지점에서 시작
        end: "top 50%", // 화면의 50% 지점에서 종료
        toggleActions: "play none none none", // 한 번만 실행

        // markers: true,
      },
    });
  });

  /* 탭메뉴 활성 */
  const $tabMenu = $(".tab-menu > a");
  const $tabContent = $(".tab-con > div");

  //   console.log($tabMenu, $tabContent);

  $tabContent.hide().eq(0).show();

  $tabMenu.on("click", function (e) {
    e.preventDefault();

    const tIdx = $(this).index();

    // console.log(tIdx);

    $tabMenu.removeClass("on").eq(tIdx).addClass("on");
    $tabContent.hide().eq(tIdx).show();
  });

  const $chaSlider = new Swiper(".testSlider1", {
    slidesPerView: 3,
    spaceBetween: 10,
    // autoplay: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".btn.btn-next",
      prevEl: ".btn.btn-prev",
    },

    observer: true,
    observerParents: true,
  });

  //   동일한 형태의 슬라이드의 경우, 공통의 이름으로 한 번에 설정 적용
  const $testSLider2 = new Swiper(".testSlider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    observer: true,
    observeParents: true,
  });

  /* 명대사 섹션 */
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    scrollTrigger: {
      trigger: "movie-famousline",
      start: "top 0%",
      end: "bottom bottom",

      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        document.querySelector(
          ".movie-famousline"
        ).style.background = `rgba(0,0,0 ${progress})`;
      },
    },
  });

  /*   ScrollTrigger.create({
    scrollTrigger: {
      trigger: "movie-famousline",
      start: "top 0%",
      end: "bottom+=3000",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        document.querySelector(
          ".movie-famousline"
        ).style.background = `rgba(0,0,0 ${progress})`;
      },
    },
  }); */

  //   배경색상전환
  ScrollTrigger.create({
    trigger: ".movie-famousline",
    start: "top -25%",
    end: "bottom+=2500 0%",
    pin: true,
    /*    markers: true, */
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const startColor = { r: 0, g: 0, b: 0 };
      const endColor = { r: 74, g: 144, b: 226 };

      const currentColor = {
        r: Math.round(startColor.r + (endColor.r - startColor.r) * progress),
        g: Math.round(startColor.g + (endColor.g - startColor.g) * progress),
        b: Math.round(startColor.b + (endColor.b - startColor.b) * progress),
      };

      document.querySelector(
        ".movie-famousline"
      ).style.background = `rgb(${currentColor.r}, ${currentColor.g},${currentColor.b})`;
    },
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".movie-famousline", // 트리거 요소
      start: "top -25%", // 시작 지점
      end: "bottom+=1500 0%", // 종료 지점
      scrub: 1, // 스크롤과 동기화
    },
  });

  // 타임라인에 텍스트 애니메이션 추가
  tl.to("#line1", {
    opacity: 1,
    y: 0, // 부드럽게 위치 조정
    duration: 4,
    ease: "power2.out", // 잔잔한 자연스러운 움직임
  })
    .to("#line2", {
      opacity: 1,
      y: 0,
      duration: 4,
      ease: "power2.out",
    })
    .to("#line3", {
      opacity: 1,
      y: 0,
      duration: 4,
      ease: "power2.out",
    })
    .to("#line4", {
      opacity: 1,
      y: 0,
      duration: 4,
      ease: "power2.out",
    });
  /*   const lines = document.querySelectorAll(".quote-line");
  lines.forEach((line, index) => {
    gsap.fromTo(
      line,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: -50,
        duration: 2,
        scrollTrigger: {
          trigger: ".movie-famousline",
          start: "top top",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }); */

  // 리뷰 섹션 효과
  document.querySelectorAll(".re-comment").forEach((comment, index) => {
    gsap.to(comment, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: comment,
        start: "top 80%",
        toggleActions: "play none none none",
        /*     markers: true, */
      },
    });
  });

  // 영상
  const $body = $("body");
  const $dim = $(".dim");
  const $videoWrap = $(".video-wrap");
  const $video = $videoWrap.find(".ser-video iframe");
  $btnClose = $(".btn-close");
  const $selectVideo = $(".ser-con > li");
  const $headerTab = $(".hea-tab");

  // 비디오 리스트를 클릭(선택) 했을 떄
  $selectVideo.on("click", function () {
    // 선택한 비디오 링크를 받아서 변수에 저장
    let videoLink = $(this).data("link"); /* data-link */

    videoLink += "?autoplay=1"; //videoLink =videoLink + '?autoplay=1'

    console.log(videoLink);

    // $video 의 src 값으로 비디오 링크를 세팅
    $video.attr("src", videoLink);

    // dim을 보이게
    $dim.fadeIn();
    // $videoWrap를 보이게
    $videoWrap.addClass("active");
    // hea-tab 안보이게
    $headerTab.fadeOut();

    $navTab.fadeOut();

    // 선택한 놈의 인덱스를 구해서 변수에 저장 : videoIdx
    const videoIdx = $(this).index();
    console.log(videoIdx);
  });

  $btnClose.on("click", function () {
    // dim을 안보이게
    $dim.fadeOut();
    $videoWrap.removeClass("active");

    $headerTab.fadeIn(300);

    $navTab.fadeIn(300);

    //$video의 src값을 없애자 --> 동영상 삭제
    setTimeout(function () {
      $video.attr("src", "");
    }, 300);
  });

  //네비게이션 메뉴 탭 온오프
  const $heaTab = $(".hea-tab");
  const $navTab = $(".nav-tab");
  const $navMenu = $(".nav-menu");

  $navMenu.hide();

  $heaTab.on("click", function () {
    $navMenu.fadeIn();
    $heaTab.fadeOut();

    $navTab.addClass("active");
  });

  $navTab.on("click", function () {
    $navMenu.fadeOut();
    $heaTab.fadeIn();
  });
});
