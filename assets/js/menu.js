// /assets/js/menu.js — universal renderer (no static data imports)

/* ---------- Utilities ---------- */
function formatPrice(p){ if(typeof p==="number") return `$${p.toFixed(2)}`; const s=String(p??"").trim(); return /^\$|^\+\$/.test(s)?s:(s?`$${s}`:""); }
function cleanName(name){ return String(name??"").replace(/\s*[·•\-–—]?\s*\$?\d[\d,]*(\.\d{2})?\s*$/,"").trim(); }
function byNumberThenName(a,b){ const an=a.number??9999, bn=b.number??9999; if(an!==bn) return an-bn; return String(a.name).localeCompare(String(b.name)); }
function normGroup(g){ return String(g??"core").trim().toLowerCase(); }

/* ---------- Row rendering ---------- */
function renderAddonRow(addon){
  const li=document.createElement("li"); li.className="addon-item";
  const name=document.createElement("span"); name.className="name"; name.textContent=addon.name??"";
  const leaders=document.createElement("span"); leaders.className="leaders";
  const price=document.createElement("span"); price.className="price"; price.textContent=formatPrice(addon.price??"");
  const row=document.createElement("div"); row.className="row"; row.append(name,leaders,price);
  li.append(row); return li;
}
function renderRow(item,{markSignature=false}={}){
  const li=document.createElement("li"); li.className="menu-item"; if(markSignature) li.setAttribute("data-signature","");
  li.style.animation="fadeIn .5s ease-out forwards"; li.style.animationPlayState="paused";
  const num=document.createElement("span"); num.className="num"; num.textContent=item.number??"•";
  const name=document.createElement("span"); name.className="name"; name.textContent=cleanName(item.name);
  const leaders=document.createElement("span"); leaders.className="leaders";
  const price=document.createElement("span"); price.className="price"; price.textContent=formatPrice(item.price);
  const header=document.createElement("div"); header.className="row"; header.append(num,name,leaders,price);
  const desc=document.createElement("p"); desc.className="desc"; desc.textContent=item.description??"";
  li.append(header,desc);
  if(Array.isArray(item.addons)&&item.addons.length){
    const ul=document.createElement("ul"); ul.className="addons";
    item.addons.forEach(a=>ul.appendChild(renderAddonRow(a))); li.appendChild(ul);
  }
  return li;
}

/* ---------- Mounting & Reveal ---------- */
function mountList(listEl,items,{markSignature=false}={}){
  const frag=document.createDocumentFragment(); items.forEach(it=>frag.appendChild(renderRow(it,{markSignature})));
  listEl.innerHTML=""; listEl.appendChild(frag);
}
function initScrollReveal(root=document){
  const els=root.querySelectorAll(".menu-item");
  const io=new IntersectionObserver((entries)=>{ for(const e of entries){ if(e.isIntersecting){ e.target.style.animationDelay="0s"; e.target.style.animationPlayState="running"; io.unobserve(e.target);} }},{threshold:.1});
  els.forEach(el=>io.observe(el));
}

/* ---------- Section helpers ---------- */
function titleCase(s){ return String(s).replace(/\b[a-z]/g,m=>m.toUpperCase()); }
function makeSection(titleText){
  const section=document.createElement("section"); section.className="menu-section";
  const h3=document.createElement("h3"); h3.className="menu-section__title"; h3.textContent=titleText;
  const ol=document.createElement("ol"); ol.className="menu-list"; section.append(h3,ol);
  return {section,list:ol};
}

/* ---------- Build from generic data ---------- */
async function buildFromData(menu,selectors,options={}){
  const items=(menu||[]).filter(x=>x&&(x.isActive??true));
  const byGroup=new Map();
  for(const it of items){ const g=normGroup(it.sortGroup); if(!byGroup.has(g)) byGroup.set(g,[]); byGroup.get(g).push(it); }
  for(const [g,arr] of byGroup) arr.sort(byNumberThenName);

  const explicitKeys=Object.keys(selectors||{}).filter(k=>k!=="container");
  const hasExplicit=explicitKeys.length>0;

  if(hasExplicit){
    for(const [group,arr] of byGroup){
      const sel=selectors[group] ??
        (group==="core"?selectors.core:null) ??
        (group==="signature"?selectors.signature:null) ??
        (group==="gel"?selectors.gel:null) ??
        (group==="acrylic"?selectors.acrylic:null);
      if(!sel) continue;
      const el=document.querySelector(sel); if(!el) continue;
      mountList(el,arr,{markSignature:group==="signature"});
    }
  }

  if(!hasExplicit && selectors?.container){
    const container=document.querySelector(selectors.container);
    if(container){
      container.innerHTML="";
      for(const [group,arr] of byGroup){
        const {section,list}=makeSection(titleCase(group));
        container.appendChild(section);
        mountList(list,arr,{markSignature:group==="signature"});
      }
    }
  }

  const suppressed=(options.suppressSignatureNames||[]).map(s=>s.toLowerCase());
  if(suppressed.length){
    (selectors?.container?document.querySelector(selectors.container):document)
      .querySelectorAll(".menu-item").forEach(li=>{
        const n=(li.querySelector(".name")?.textContent||"").toLowerCase();
        if(suppressed.some(s=>n.includes(s))){
          li.removeAttribute("data-signature");
          li.classList.remove("sig-tint");
          li.querySelector(".leaders")?.classList.remove("leaders--gold");
          li.querySelector(".badge-signature")?.remove?.();
        }
      });
  }
  initScrollReveal(document);
}

/* ---------- Public bootstrap (dynamic import) ---------- */
export async function bootstrapMenu({ dataModule, selectors, options={} }){
  if(!dataModule) throw new Error("bootstrapMenu: 'dataModule' is required");
  if(!selectors) throw new Error("bootstrapMenu: 'selectors' is required");
  const mod=await import(dataModule);
  const menu= mod.MENU ?? mod.HANDNAIL_MENU ?? mod.PEDICURE_MENU ?? Object.values(mod).find(v=>Array.isArray(v)) ?? [];
  await buildFromData(menu,selectors,options);
}

/* ---------- Backward-compatible auto-init for Pedicure ---------- */
document.addEventListener("DOMContentLoaded", async ()=>{
  const hasPedicure = document.querySelector("#pedicure-core") || document.querySelector("#pedicure-signature");
  if(hasPedicure){
    const mod=await import("/assets/js/menu-pedicure.data.js");
    const pedicureMenu = mod.MENU ?? mod.PEDICURE_MENU ?? Object.values(mod).find(v=>Array.isArray(v)) ?? [];
    buildFromData(pedicureMenu,{ core:"#pedicure-core", signature:"#pedicure-signature" },{ suppressSignatureNames:["Herbal Detox"] });
  }
});
