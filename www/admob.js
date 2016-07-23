var admobid = {};

admobid = { // for iOS
    banner: 'ca-app-pub-6354599044835192/2102912262'
};

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}