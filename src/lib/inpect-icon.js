(function() {
  const icon = document.createElement("div");
  icon.setAttribute(
    "style",
    "position: fixed; width: 0px; height: 0px; overflow: hidden; visibility: hidden;opacity: 0;"
  );
  icon.innerHTML = `<svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">

    <symbol id="arrow-left" viewBox="0 0 1024 1024"><path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"></path></symbol>
    
    <symbol id="gengduo" viewBox="0 0 1024 1024"><path d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z"></path></symbol>
    
    <symbol id="xuegao" viewBox="0 0 1024 1024"><path d="M511.2 84.3c-147 0-266.3 119.2-266.3 266.3v333.8c0 29.4 23.8 53.3 53.3 53.3h426c29.4 0 53.3-23.8 53.3-53.3V350.6c-0.1-147-119.3-266.3-266.3-266.3z" fill="#FFCD5F"></path><path d="M674.4 140.2c20.7 37.9 32.5 81.4 32.5 127.6v333.8c0 29.4-23.8 53.3-53.3 53.3H244.9v29.6c0 29.4 23.8 53.3 53.3 53.3h426c29.4 0 53.3-23.8 53.3-53.3V350.6c-0.1-85.5-40.4-161.6-103.1-210.4z" fill="#FFA73E"></path><path d="M573.9 848.8l-13.3-131.5H447l-13.3 131.5c-0.6 4-0.9 8.2-0.9 12.4 0 43.1 31.8 78.1 71 78.1s71-35 71-78.1c0-4.2-0.3-8.4-0.9-12.4z" fill="#FF6545"></path><path d="M778.3 357.1s-27.5-70-118-79.8c-90.5-9.8-127.8 87.8-200.6 79.8-79.5-8.7-77.2-73.6-117.2-93.1-39.9-19.5-80.6-7-80.6-7C299.3 155 397.2 82.3 512.1 82.3c147 0 266.3 119.2 266.3 266.3v8.5z" fill="#FFFFFF"></path><path d="M677.7 205.7c-90.5-9.8-127.8 87.8-200.6 79.8-79.5-8.7-77.2-73.6-117.2-93.1-20-9.8-40.1-11.5-55.3-10.8-18 22.4-32.5 47.8-42.6 75.4 0 0 40.6-12.5 80.6 7s37.7 84.4 117.2 93.1c72.8 8 110.1-89.5 200.6-79.8 90.5 9.8 118 79.8 118 79.8v-8.5c0-41.3-9.4-80.4-26.2-115.3-17.9-12.9-42.2-24.1-74.5-27.6z" fill="#E5E5E5"></path><path d="M506.7 959.6c-50.4 0-91.5-41-91.5-91.4 0-4.6 0.4-9.3 1.1-13.9l10.7-96.2H299c-40.6 0-73.7-33.1-73.7-73.7V360.8c0-11.3 9.2-20.4 20.4-20.4s20.4 9.2 20.4 20.4v323.5c0 18.1 14.7 32.8 32.8 32.8h150.9c5.8 0 11.4 2.5 15.2 6.8 3.9 4.3 5.7 10.1 5.1 15.9l-13.3 119.3c0 0.3-0.1 0.6-0.1 1-0.4 2.7-0.6 5.3-0.6 8 0 27.8 22.7 50.5 50.6 50.5 27.9 0 50.6-22.6 50.6-50.5 0-2.7-0.2-5.3-0.6-8 0-0.3-0.1-0.6-0.1-1l-13.3-119.3c-0.6-5.8 1.2-11.6 5.1-15.9 3.9-4.3 9.4-6.8 15.2-6.8H725c18.1 0 32.8-14.7 32.8-32.8V363.6c-6.2-12.4-32.9-56.7-99.8-63.9-39.7-4.3-67.7 16.7-97.3 38.8-27.3 20.5-55.4 41.5-92.4 41.5-3.5 0-7.2-0.2-10.9-0.6-59.1-6.5-81.7-41-98.2-66.2-8.8-13.4-15.7-24-25.7-28.9-31.3-15.3-64.2-6.2-65.7-5.8-7.4 2.3-15.4 0.2-20.8-5.4-5.4-5.6-7-13.9-4.3-21.2 20-54.6 55.7-101.4 103.3-135.2 48.7-34.6 106.1-52.9 166-52.9 45.6 0 89.1 10.4 129.5 30.8 38.5 19.5 72.7 48 98.8 82.5 6.8 9 5.1 21.8-3.9 28.7-9 6.8-21.8 5.1-28.7-3.9-47-61.8-118.3-97.2-195.8-97.2-91.2 0-174.5 51-216.8 129.9 16.5 0.2 36.4 3.3 56.3 13 20.1 9.8 31.2 26.8 42 43.2 15.3 23.4 28.5 43.6 68.4 47.9 26.4 2.9 48.6-13.7 74.4-33 33-24.7 70.5-52.8 126.2-46.8 101.7 11 133.6 89.3 134.9 92.6 0.9 2.4 1.4 4.9 1.4 7.5v325.3c0 40.6-33.1 73.7-73.7 73.7H586.3l10.7 96.2c0.7 4.6 1.1 9.3 1.1 13.9 0 50.5-41 91.5-91.4 91.5z" fill="#333333"></path><path d="M441 636.3c-11.3 0-20.4-9.2-20.4-20.4v-184c0-11.3 9.2-20.4 20.4-20.4 11.3 0 20.4 9.2 20.4 20.4v184c0 11.3-9.1 20.4-20.4 20.4zM583 636.3c-11.3 0-20.4-9.2-20.4-20.4v-184c0-11.3 9.2-20.4 20.4-20.4s20.4 9.2 20.4 20.4v184c0.1 11.3-9.1 20.4-20.4 20.4z" fill="#333333"></path></symbol>
    
    <symbol id="guozhi" viewBox="0 0 1024 1024"><path d="M489.5 812.1L362.6 939.2h255.6z" fill="#FF6545"></path><path d="M223.336743 401.639502a123 123 0 1 0 84.132921-231.165853 123 123 0 1 0-84.132921 231.165853Z" fill="#FFCD5F"></path><path d="M340.5 188.5c11.1 27.2 12.5 58.5 1.6 88.3-23.2 63.8-93.8 96.7-157.7 73.5-12.2-4.4-23.2-10.6-32.9-18.1 12.6 31.1 37.9 56.9 71.9 69.3 63.8 23.2 134.4-9.7 157.7-73.5 18.7-51.6 0.8-107.7-40.6-139.5z" fill="#FFA73E"></path><path d="M720.1 530.9s-54.1 29.9-111.3 19.5C551.7 540 481.6 488 411.5 481.1s-150.6 44.3-150.6 44.3h-0.2v101.4c0 120.3 97.5 217.9 217.9 217.9h22.6c120.3 0 217.9-97.5 217.9-217.9V531" fill="#FF954D"></path><path d="M651.3 551.6v36.2c0 120.3-97.5 217.9-217.9 217.9h-22.6c-25.6 0-50.2-4.4-73-12.5 38 32.1 87 51.5 140.6 51.5H501c120.3 0 217.9-97.5 217.9-217.9v-95.3c-5.7 3-33.1 16.4-67.6 20.1zM719 530.9v0.6c0.7-0.4 1.1-0.6 1.1-0.6H719z" fill="#FF6545"></path><path d="M617.1 959.7H361.5c-8 0-15.3-4.7-18.7-12-3.3-7.3-2.1-15.9 3.2-22l59.2-67.6c-41.8-13.2-79.6-38-108.6-71.7-37.3-43.2-57.8-98.5-57.8-155.6V408.3c0-5.6 2.3-11 6.3-14.8 4.1-3.9 9.5-5.9 15.1-5.6 45 2.1 85.6-25 101.1-67.4 4.7-13 6.8-26.5 6.1-40.2-2.1-41.2-28.5-77-67.3-91.1-53.1-19.3-112 8.2-131.4 61.3-11 30.3-7.4 63.2 10 90.4 6.1 9.5 3.3 22.2-6.2 28.3-9.5 6.1-22.2 3.3-28.3-6.2-24.3-38-29.4-84.1-14-126.5 27-74.5 109.5-113 183.8-85.9 54.3 19.8 91.3 69.8 94.3 127.6 1 19.2-1.9 38.2-8.5 56.4-10.7 29.3-30.1 53.8-56.1 70.9-19.1 12.5-41.3 20.3-63.9 22.8V631c0 97.7 69.8 179.6 166 194.9 2.4 0.3 4.8 1.1 7.1 2.3 8.4 4.6 12.5 14.4 9.9 23.6-0.9 3.1-2.5 5.9-4.5 8.1l-51.6 58.9h164.8l-52.2-58.9c-1.9-2.1-3.4-4.6-4.4-7.4-3.1-9.2 0.8-19.4 9.2-24.2 2.3-1.4 4.9-2.2 7.4-2.6 96-15.5 165.6-97.4 165.6-194.8V301.8h-208c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5h228.5c11.3 0 20.5 9.2 20.5 20.5v349.6c0 57-20.5 112.2-57.6 155.4a238.6 238.6 0 0 1-108.1 71.6l60.1 67.7c5.4 6 6.7 14.7 3.4 22-3.5 7.4-10.8 12.1-18.8 12.1z" fill="#333333"></path><path d="M411.3 734.1c-2.3 0-4.7-0.4-7-1.2-10.6-3.9-16.1-15.6-12.2-26.3l210.4-577c3.9-10.6 15.6-16.1 26.3-12.2 10.6 3.9 16.1 15.6 12.2 26.3l-210.4 577c-3.1 8.2-10.9 13.4-19.3 13.4z" fill="#333333"></path><path d="M683.1 226.2c-9.2 0-18.5-1.6-27.7-4.9-20.4-7.4-36.6-22.3-45.8-42-9.2-19.6-10.1-41.7-2.7-62 15.3-42 62-63.8 104-48.5 42 15.3 63.8 62 48.5 104-12 32.9-43.2 53.4-76.3 53.4z m0.1-121.3c-16.4 0-31.8 10.1-37.8 26.4-3.7 10.1-3.2 21 1.3 30.7s12.6 17.1 22.7 20.8c20.8 7.6 43.9-3.2 51.5-24 7.6-20.8-3.2-43.9-24-51.5-4.5-1.6-9.2-2.4-13.7-2.4z" fill="#FFCD5F"></path><path d="M882.2 173.3c-2.3 0-4.7-0.4-7-1.2l-178.3-64.8c-10.6-3.9-16.1-15.6-12.3-26.3 3.9-10.6 15.6-16.1 26.3-12.3l178.3 64.8c10.6 3.9 16.1 15.6 12.3 26.3-3.1 8.4-11 13.5-19.3 13.5zM629.4 560.7c-8.8 0-17.9-0.5-27.1-1.6-26.6-3.2-54.6-11.8-84.2-20.9-35.6-10.9-72.4-22.1-108.5-24.5-63.2-4.2-137.8 27.1-138.5 27.5-10.4 4.4-22.5-0.4-26.9-10.8-4.4-10.4 0.4-22.5 10.8-26.9 3.4-1.5 84.4-35.5 157.3-30.6 40.8 2.7 79.9 14.7 117.7 26.2 27.9 8.5 54.2 16.6 77.2 19.4 50.2 6.1 99.3-11.5 99.7-11.7 10.6-3.9 22.4 1.6 26.3 12.2 3.9 10.6-1.5 22.4-12.1 26.3-1.9 0.6-42.6 15.4-91.7 15.4z" fill="#333333"></path></symbol>
    
    <symbol id="kafei" viewBox="0 0 1024 1024"><path d="M565.6 850.7H456.9c-110.5 0-200-89.5-200-200V455.1h508.7v195.7c0 110.4-89.6 199.9-200 199.9z" fill="#FFFFFF"></path><path d="M675.6 455.1v143c0 111.6-90.5 202.2-202.2 202.2H369c-17.5 0-34.4-2.2-50.6-6.4 36.4 35.2 86 56.9 140.6 56.9h104.4c111.6 0 202.2-90.5 202.2-202.2V455.1h-90z" fill="#E5E5E5"></path><path d="M324.8 455h459.9v122.3H324.8z" fill="#FF6545"></path><path d="M222.7 455h452.8v122.3H222.7z" fill="#FF954D"></path><path d="M812.3 959.2H209.4c-11.2 0-20.2-9.1-20.2-20.2 0-11.2 9.1-20.2 20.2-20.2h602.9c11.2 0 20.2 9.1 20.2 20.2 0 11.2-9.1 20.2-20.2 20.2zM563 875.4H458.6c-52.8 0-104-18.8-144.1-53-39.7-33.8-66.3-80.6-75.1-131.7-1.9-11 5.5-21.4 16.5-23.3 11-1.9 21.4 5.5 23.3 16.5 15 87.5 90.4 151.1 179.4 151.1H563c100.3 0 182-81.7 182-182v-51.1H212c-11.2 0-20.2-9.1-20.2-20.2V459.5c0-11.2 9.1-20.2 20.2-20.2h553.2c89.1 0 161.5 72.5 161.5 161.5 0 51.5-24.9 100.4-66.6 130.7-9 6.6-21.7 4.6-28.2-4.5-6.6-9-4.6-21.7 4.5-28.2 31.3-22.7 50-59.4 50-98 0-66.8-54.3-121.1-121.1-121.1h-533v81.8h532.9c5.4 0 10.5 2.1 14.3 5.9 3.8 3.8 5.9 8.9 5.9 14.3V653c0 59.4-23.1 115.2-65.1 157.2s-97.9 65.2-157.3 65.2z" fill="#333333"></path><path d="M621.3 781.7c-5.7 0-11.4-2.4-15.4-7.1-7.2-8.5-6.2-21.3 2.3-28.5 15.2-13 28.1-28.3 38.4-45.4 5.7-9.6 18.1-12.7 27.7-7 9.6 5.7 12.7 18.1 7 27.7-12.5 20.9-28.3 39.6-46.9 55.4-3.8 3.3-8.4 4.9-13.1 4.9zM686.1 678.2c-1.7 0-3.4-0.2-5-0.6-10.8-2.8-17.3-13.8-14.5-24.6 0.6-2.3 1.1-4.6 1.6-6.9 2.4-10.9 13.1-17.9 24-15.5 10.9 2.4 17.9 13.1 15.5 24-0.6 2.8-1.3 5.7-2 8.5-2.4 9-10.6 15.1-19.6 15.1z" fill="#FFA73E"></path><path d="M369 214.5c-14-20.7-27.3-40.3-27.3-59.9 0-29.8 12.3-45.4 18.2-51.3 6.2-3.5 10.4-10.2 10.4-17.8 0-11.3-9.2-20.5-20.5-20.5-3.3 0-6.4 0.8-9.2 2.2 0 0-1 0.4-2.1 1.2-1.2 0.8-2.4 1.8-3.4 2.8-10.8 9.5-33.9 35.4-33.9 83.4 0 32 18.2 58.9 34.3 82.6 13.4 19.8 26 38.4 26 55.9 0 31.7-24.4 59.4-24.9 59.9-7.5 8.2-6.9 21 1.3 28.5 3.9 3.5 8.8 5.3 13.6 5.3 5.5 0 10.9-2.2 14.9-6.6 1.4-1.6 35.4-39.3 35.4-87.1 0.2-30-16.6-54.7-32.8-78.6zM520.7 214.5c-14-20.7-27.3-40.3-27.3-59.9 0-29.8 12.3-45.4 18.2-51.3 6.2-3.5 10.4-10.2 10.4-17.8 0-11.3-9.2-20.5-20.5-20.5-3.3 0-6.4 0.8-9.2 2.2 0 0-1 0.4-2.1 1.2-1.2 0.8-2.4 1.8-3.4 2.8-10.8 9.5-33.9 35.4-33.9 83.4 0 32 18.2 58.9 34.3 82.6 13.4 19.8 26 38.4 26 55.9 0 31.7-24.4 59.4-24.9 59.9-7.5 8.2-6.9 21 1.3 28.5 3.9 3.5 8.8 5.3 13.6 5.3 5.5 0 10.9-2.2 14.9-6.6 1.4-1.6 35.4-39.3 35.4-87.1 0.1-30-16.6-54.7-32.8-78.6zM672.3 214.5c-14-20.7-27.3-40.3-27.3-59.9 0-29.8 12.3-45.4 18.2-51.3 6.2-3.5 10.4-10.2 10.4-17.8 0-11.3-9.2-20.5-20.5-20.5-3.3 0-6.4 0.8-9.2 2.2 0 0-1 0.4-2.1 1.2-1.2 0.8-2.4 1.8-3.4 2.8-10.8 9.5-33.9 35.4-33.9 83.4 0 32 18.2 58.9 34.3 82.6 13.4 19.8 26 38.4 26 55.9 0 31.7-24.4 59.4-24.9 59.9-7.5 8.2-6.9 21 1.3 28.5 3.9 3.5 8.8 5.3 13.6 5.3 5.5 0 10.9-2.2 14.9-6.6 1.4-1.6 35.4-39.3 35.4-87.1 0.2-30-16.5-54.7-32.8-78.6z" fill="#333333"></path></symbol>
    
    <symbol id="hanbao" viewBox="0 0 1024 1024"><path d="M844.3 613.8H187.8c-27.6 0-50-22.4-50-50v-2.2c0-27.6 22.4-50 50-50h656.6c27.6 0 50 22.4 50 50v2.2c-0.1 27.7-22.4 50-50.1 50z" fill="#FF954D"></path><path d="M854.1 512.2c0.5 2.9 0.8 5.9 0.8 9 0 28.2-22.9 51.1-51.1 51.1H149.4c-3.9 0-7.6-0.4-11.3-1.3 4.2 24 25.1 42.2 50.3 42.2h654.3c28.2 0 51.1-22.9 51.1-51.1 0.1-24.4-16.9-44.7-39.7-49.9z" fill="#FF6545"></path><path d="M840.3 512.6H183.7c-27.6 0-50-22.4-50-50v-2.2c0-27.6 22.4-50 50-50h656.6c27.6 0 50 22.4 50 50v2.2c0 27.6-22.4 50-50 50z" fill="#FF954D"></path><path d="M850 411c0.5 2.9 0.8 5.9 0.8 9 0 28.2-22.9 51.1-51.1 51.1H145.3c-3.9 0-7.6-0.4-11.3-1.3 4.2 24 25.1 42.2 50.3 42.2h654.3c28.2 0 51.1-22.9 51.1-51.1 0.2-24.4-16.9-44.7-39.7-49.9z" fill="#FF6545"></path><path d="M799.7 796.2H223.6c-76.7 0-138.9-62.2-138.9-138.9v-4c0-21.9 17.8-39.7 39.7-39.7h775.2c21.7 0 39.4 17.6 39.4 39.4v4c-0.1 76.8-62.4 139.2-139.3 139.2z" fill="#FFFFFF"></path><path d="M898.7 613.5h-15.4c-5.6 73.5-67 131.5-142 131.5H171.5c-23.6 0-45.9-5.8-65.4-15.9 25.1 40.3 69.7 67.1 120.6 67.1h569.8c78.6 0 142.4-63.7 142.4-142.4 0-22.2-18-40.3-40.2-40.3z" fill="#E5E5E5"></path><path d="M800.2 227.8h-576c-76.7 0-138.9 62.2-138.9 138.9v4c0 21.9 17.8 39.7 39.7 39.7h775.2c21.7 0 39.4-17.6 39.4-39.4v-4c-0.1-76.8-62.4-139.2-139.4-139.2z" fill="#FFFFFF"></path><path d="M849.4 237.7c17.4 23.6 27.7 52.8 27.7 84.4 0 22.2-18 40.2-40.2 40.2H85.5c-0.1 2.5-0.2 5-0.2 7.5 0 22.4 18.2 40.6 40.6 40.6h773.4c22.2 0 40.2-18 40.2-40.2 0-60.2-37.3-111.6-90.1-132.5z" fill="#E5E5E5"></path><path d="M352.1 654L220.2 512H484z" fill="#FFCD5F"></path><path d="M409.1 512l-94.4 101.7 37.4 40.3L484 512z" fill="#FFA73E"></path><path d="M796.7 817.6H226.9c-89.6 0-162.5-72.9-162.5-162.5 0-33.7 27.4-61 61-61h712.3c1.2-0.2 2.4-0.3 3.7-0.3 16.9 0 30.7-13.8 30.7-30.7s-13.8-30.7-30.7-30.7H186.1c-39.5 0-71.6-32.1-71.6-71.6 0-37.9 29.5-68.9 66.8-71.4 1.4-0.3 2.9-0.5 4.4-0.5h713.2c10.9 0 19.8-8.9 19.8-19.8 0-67.2-54.7-121.9-121.9-121.9H226.9c-37.9 0-72.9 17.2-96.1 47.1-6.9 8.9-19.8 10.5-28.7 3.6-8.9-6.9-10.5-19.8-3.6-28.7 31-40 77.9-62.9 128.4-62.9h569.8c89.8 0 162.8 73 162.8 162.8 0 33.5-27.2 60.7-60.7 60.7H189.7c-1.2 0.2-2.4 0.3-3.7 0.3-16.9 0-30.7 13.8-30.7 30.7s13.8 30.7 30.7 30.7h655.3c39.5 0 71.6 32.1 71.6 71.6 0 38-29.8 69.2-67.3 71.4-1.4 0.3-2.8 0.5-4.3 0.5h-716c-11.1 0-20.1 9-20.1 20.1 0 67 54.5 121.6 121.6 121.6h569.8c46.6 0 88.5-26 109.3-67.7 5-10.1 17.3-14.2 27.4-9.2 10.1 5 14.2 17.3 9.2 27.4-13.3 26.7-33.7 49.3-58.9 65.3-25.9 16.4-56 25.1-86.9 25.1z" fill="#333333"></path><path d="M382.3 329.5c-6.2 0-12.4-2.8-16.4-8.2L305 240.1c-6.8-9-4.9-21.9 4.1-28.6 9-6.8 21.9-4.9 28.6 4.1l60.9 81.2c6.8 9 4.9 21.9-4.1 28.6-3.6 2.7-7.9 4.1-12.2 4.1zM542.5 329.5c-6.2 0-12.4-2.8-16.4-8.2l-60.9-81.2c-6.8-9-4.9-21.9 4.1-28.6 9-6.8 21.9-4.9 28.6 4.1l60.9 81.2c6.8 9 4.9 21.9-4.1 28.6-3.7 2.7-8 4.1-12.2 4.1zM702.6 329.5c-6.2 0-12.4-2.8-16.4-8.2l-60.9-81.2c-6.8-9-4.9-21.9 4.1-28.6 9-6.8 21.9-4.9 28.6 4.1l60.9 81.2c6.8 9 4.9 21.9-4.1 28.6-3.6 2.7-8 4.1-12.2 4.1z" fill="#FFA73E"></path><path d="M352.7 674.5c-5.7 0-11.1-2.4-15-6.5L205.8 526c-5.5-6-7-14.6-3.8-22.1 3.3-7.5 10.6-12.3 18.7-12.3h263.8c8.1 0 15.5 4.8 18.7 12.3 3.3 7.5 1.8 16.1-3.8 22.1L367.5 668c-3.7 4.1-9.1 6.5-14.8 6.5z m-85-142.1l85 91.5 85-91.5h-170z" fill="#333333"></path></symbol>
    
    <symbol id="weichat" viewBox="0 0 1024 1024"><path d="M394.296 192q-76.428 0-141.16 31.976-64.731 31.196-102.946 87.348t-38.215 120.883q0 112.304 113.083 191.073-9.359 28.076-28.076 85.008 24.177-12.478 98.266-49.913 70.97 14.038 99.046 14.037 9.359 0 26.516-0.78-8.579-29.636-8.579-59.272 0-92.806 69.41-158.318 70.19-65.511 170.796-65.511 15.597 0 27.296 2.34-18.717-85.788-99.826-141.94-81.109-56.932-185.614-56.932zM299.149 383.073q-14.037 0-24.177-10.918-10.139-10.139-10.139-24.177 0-14.818 10.139-24.957 10.139-10.139 24.177-10.139 14.818 0 24.957 10.139 10.139 10.139 10.139 24.957 0 14.037-10.139 24.177-10.139 10.918-24.957 10.918zM498.021 383.073q-14.037 0-24.177-10.918-10.139-10.139-10.139-24.177 0-14.818 10.139-24.957 10.139-10.139 24.177-10.139 14.818 0 24.957 10.139 10.139 10.139 10.139 24.957 0 14.037-10.139 24.177-10.139 10.918-24.957 10.918zM910.584 609.242q0-55.372-33.535-102.946-33.535-47.573-88.908-74.871-54.592-27.296-117.764-27.296-99.827 0-170.016 60.052-70.19 60.052-70.19 145.060 0 85.008 70.19 145.060 70.19 60.052 170.016 60.052 28.076 0 85.008-14.038 25.736 14.037 77.989 42.115-5.459-17.938-21.057-70.19 98.266-74.871 98.266-162.997zM596.289 573.367q-11.698 0-19.497-7.799-8.579-8.579-8.579-20.277 0-11.698 8.579-20.277 7.799-7.799 19.497-7.799 11.698 0 19.497 7.799 8.579 8.579 8.579 20.277 0 11.698-8.579 20.277t-19.497 7.799zM749.926 573.367q-11.698 0-20.277-7.799-8.579-8.579-8.579-20.277 0-11.698 8.579-20.277 8.579-7.799 19.497-7.799 11.698 0 20.277 7.799 8.579 8.579 8.579 20.277 0 11.698-7.799 20.277-8.579 7.799-20.277 7.799z"  ></path></symbol>

    </svg>`;
  document.body.appendChild(icon);
})();