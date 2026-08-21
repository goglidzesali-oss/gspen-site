/* GSPEN shared JS */
function toggleMenu(){
  var m = document.getElementById("mobileNav");
  if(m) m.classList.toggle("open");
}

/* Load a content JSON file; fall back to inline <script type="application/json"> seed
   so pages also work when opened directly from disk (file://). */
function loadContent(path, seedId, cb){
  fetch(path, {cache:"no-store"})
    .then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); })
    .then(cb)
    .catch(function(){
      var seed = document.getElementById(seedId);
      if(seed){ try{ cb(JSON.parse(seed.textContent)); }catch(e){ cb({items:[]}); } }
      else cb({items:[]});
    });
}

/* Extract a YouTube video id from any usual URL form */
function ytId(url){
  if(!url) return null;
  var m = String(url).match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? m[1] : null;
}
function ytThumb(url){
  var id = ytId(url);
  return id ? "https://i.ytimg.com/vi/"+id+"/hqdefault.jpg" : null;
}

/* Video modal */
function openVideo(url){
  var id = ytId(url);
  if(!id){ window.open(url, "_blank"); return; }
  var mo = document.getElementById("vModal");
  if(!mo){
    mo = document.createElement("div");
    mo.className = "vmodal"; mo.id = "vModal";
    mo.innerHTML = '<div class="vwrap"><button class="vclose" onclick="closeVideo()">დახურვა ✕</button><div class="vbox"><iframe id="vFrame" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div></div>';
    mo.addEventListener("click", function(e){ if(e.target===mo) closeVideo(); });
    document.body.appendChild(mo);
  }
  document.getElementById("vFrame").src = "https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1";
  mo.classList.add("open");
}
function closeVideo(){
  var mo = document.getElementById("vModal");
  if(mo){ mo.classList.remove("open"); var f=document.getElementById("vFrame"); if(f) f.src=""; }
}

function esc(s){
  return String(s==null?"":s).replace(/[&<>"']/g, function(m){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m];
  });
}
function fmtDate(d){
  if(!d) return "";
  try{
    var dt = new Date(d);
    if(isNaN(dt)) return d;
    var months = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"];
    return dt.getDate()+" "+months[dt.getMonth()]+", "+dt.getFullYear();
  }catch(e){ return d; }
}
