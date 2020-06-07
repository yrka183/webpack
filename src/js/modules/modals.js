const modals = () => {
  function bindModale (triggerSelector,modaleSelector,closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modale = document.querySelector(modaleSelector),
          close = document.querySelector(closeSelector);
          console.log(trigger,modale,close);
          console.log(modale);
    trigger.forEach(item => {
     item.addEventListener("click", (e) => {
       if(e.target) {
         e.preventDefault();
       }
       modale.style.display = "block";
       document.body.style.overflow = "hidden";
     });
    }); 
    close.addEventListener("click",(e) => {
      modale.style.display = "none";
      //document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    });
    modale.addEventListener("click",(e) => {
      if(e.target === modale) {
        modale.style.display = "none";
        //document.body.classList.remove("modal-open");
        document.body.style.overflow = "";
      }
    })
  };

  function showModalByTime(selector,time) {
    setTimeout((e) => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    },time);
  }
  
 bindModale(".popup_engineer_btn",".popup_engineer",".popup_engineer .popup_close");
 bindModale(".phone_link",".popup",".popup .popup_close");
 showModalByTime(".popup", 60000);
};

export default modals;