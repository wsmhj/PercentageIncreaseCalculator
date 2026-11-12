// ===== FEEDBACK DIALOG SKIN =====
// The shared widget (/feedback-widget.js, kept identical to its source) renders a generic dialog in an open
// shadow root. Restyle it as a notebook page like the rest of the site, and patch two widget gaps:
// a stale "sent"/error line when reopened, and focus dropping to the page while sending.
(function(){
const FEEDBACK_SKIN=`
  :host{font-family:'Nunito',sans-serif;}
  dialog{background:#fffef9;color:#333;border:1px solid #d4cfc6;border-radius:6px;padding:22px 22px 18px 40px;
    box-shadow:2px 3px 18px rgba(0,0,0,.35);
    background-image:linear-gradient(to right,transparent 28px,#e8a0a0 28px,#e8a0a0 30px,transparent 30px),
      repeating-linear-gradient(to bottom,transparent 0,transparent 27px,rgba(212,220,232,.45) 27px,rgba(212,220,232,.45) 28px);}
  dialog::backdrop{background:rgba(10,26,23,.62);}
  .heading{border-bottom:2px solid #1a3a35;padding-bottom:8px;}
  h2{font-family:'Sriracha',cursive;font-weight:400;font-size:22px;color:#1a3a35;}
  .close{width:40px;height:40px;padding:0;background:#f0ede6;border:1px solid #d4cfc6;border-radius:4px;color:#555;font-size:20px;line-height:1;}
  .close:hover{background:#1a3a35;color:#7dffc4;border-color:#1a3a35;}
  .intro{color:#555;font-size:14px;}
  label{font-size:12px;font-weight:700;color:#555;}
  textarea{border:2px solid #d4cfc6;border-radius:5px;background:#fff;color:#1a3a35;font-family:'Nunito',sans-serif;font-size:16px;}
  textarea::placeholder{color:#767676;}
  .note{color:#6b6b6b;}
  .submit{background:#1a3a35;color:#7dffc4;border-radius:4px;font-weight:800;min-height:44px;}
  .submit:hover{opacity:.88;}
  .status{color:#1a3a35;font-weight:700;}
  button:focus-visible,textarea:focus-visible{outline:3px solid rgba(26,58,53,.35);outline-offset:2px;}
  textarea:focus-visible{border-color:#1a3a35;}
  @media (max-width:420px){dialog{padding:18px 16px 14px 34px;background-image:linear-gradient(to right,transparent 22px,#e8a0a0 22px,#e8a0a0 24px,transparent 24px),repeating-linear-gradient(to bottom,transparent 0,transparent 27px,rgba(212,220,232,.45) 27px,rgba(212,220,232,.45) 28px);}}
`;
(function feedbackSkin(){
  const apply=()=>{
    const root=document.getElementById('website-feedback-widget')?.shadowRoot;
    if(!root)return false;
    if(!root.querySelector('style[data-site-skin]')){
      const st=document.createElement('style');st.dataset.siteSkin='';st.textContent=FEEDBACK_SKIN;root.appendChild(st);
      const dialog=root.querySelector('dialog'),status=root.querySelector('.status'),field=root.querySelector('textarea');
      if(dialog&&status&&field){
        dialog.addEventListener('close',()=>{status.textContent='';});
        new MutationObserver(()=>{
          const done=!root.querySelector('.submit')?.disabled;
          if(done&&dialog.open&&status.textContent&&document.activeElement===document.body)field.focus();
        }).observe(status,{childList:true,characterData:true,subtree:true});
        dialog.addEventListener('close',()=>window.gtag&&gtag('event','feedback_close'));
      }
      document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('[data-feedback-open]'))window.gtag&&gtag('event','feedback_open');});
    }
    return true;
  };
  if(apply())return;
  const watcher=new MutationObserver(()=>{if(apply())watcher.disconnect();});
  watcher.observe(document.body,{childList:true});
})();
})();
