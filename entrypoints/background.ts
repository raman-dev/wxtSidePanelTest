export default defineBackground(() => {
  const GOOGLE_ORIGIN = "https://www.google.com/";
  console.log('background_script.running', { id: browser.runtime.id });
  //determines when to open sidepanel 
  browser.tabs.onUpdated.addListener( async (tabId,info,tab) => {
    if (!tab.url) return;
    const url:string = tab.url;
    console.log("tab.url is => ",url);
    if (url === GOOGLE_ORIGIN){
      //only show sidepanel on specific url
      //path needs to be path to sidepanel html that is built by wxt framework
      await browser.sidePanel.setOptions({tabId,path:"sidepanel.html",enabled:true});
    }else{ 
      //sidepanel won't open on non matching domain
      //side panels cannot be closed programmatically apparently
      await browser.sidePanel.setOptions({tabId,enabled:false});
    }
  });
  //open side panel on click extension icon 
  browser.sidePanel.setPanelBehavior({openPanelOnActionClick:true})
  .catch((error) => {
      console.error(error);
  });

  //side panels don't auto open
  //and don't auto close when changing tabs
  //once open remain open
  browser.commands.onCommand.addListener(async (command) => {
    if (command !== 'open_panel') return;
    console.log('received.open_panel.command');
    browser.tabs.query({active:true, currentWindow:true},([tab]) => {
      if (!tab?.id) return;
      // browser.sidePanel.
      console.log("command.tab=>",tab);
      browser.sidePanel.open({tabId: tab.id});
    });
    
  });
});
