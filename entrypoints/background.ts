export default defineBackground(() => {
  const GOOGLE_ORIGIN = "https://www.google.com";
  console.log('Hello background!', { id: browser.runtime.id });
  // browser.tabs.onUpdated.addListener( async (tabId,info,tab) => {
  //   if (!tab.url) return;
  //   const url = tab.url;
  //   if (url.origin === GOOGLE_ORIGIN){
  //     await browser.sidePanel.setOptions({
  //       tabId,
  //       path: "index.html",
  //       enabled: true
  //     });
  //   }else{ 
  //     await browser.sidePanel.setOptions({tabId,enabled:false});
  //   }
  // });
  browser.sidePanel
    .setPanelBehavior({openPanelOnActionClick:true})
    .catch((error) => {
      console.error(error);
    });
});
