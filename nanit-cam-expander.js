/*
  This will expand the Nanit cam live stream video on the web app, allowing you to watch it in 800x550, instead of either tiny or full screen.  You can run this in the console of your
   browser, or use a browser extension like Tampermonkey to run it automatically.

  Steps:
  1. Open https://my.nanit.com
  2. Open the Console in your browser's Developer Tools: https://balsamiq.com/support/faqs/browserconsole
  3. Copy paste the below script in the Console, and press Enter/return to run it
  4. Done!
*/


function enlarge(el) {
  el.setAttribute('style', 'width:800px;height:550px');
}

const babyStreams = Array.from(document.getElementsByClassName('baby-stream'));
babyStreams.forEach(el => {
  enlarge(el);
  enlarge(el.children[0]);
  enlarge(el.children[0].children[0]);
  const videos = Array.from(el.getElementsByTagName('video'));
  videos.forEach(videoEl => enlarge(videoEl));
});
