import React from 'react';
import { createRoot } from 'react-dom/client';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaUserTie, FaMosque } from 'react-icons/fa';
import { MdCall, MdDesignServices, MdArchitecture, MdOutlineEngineering } from 'react-icons/md';
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { GiElectricalResistance, GiWaterDrop, GiGroundbreaker, GiModernCity, GiPaintRoller } from 'react-icons/gi';
import { TbRulerMeasure, TbBuildingSkyscraper, TbHomeCog } from 'react-icons/tb';
import { BsBadge3D } from 'react-icons/bs';
import { LuClipboardCheck } from 'react-icons/lu';

const RoofIcon = () => <svg className="custom-roof-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M6 31 32 8l26 23"/><path d="M14 28v28h36V28M26 56V39h12v17"/></svg>;
const BlueprintIcon = () => <svg className="custom-blueprint-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 12h48v40H8zM16 44l10-14 8 8 7-11 9 17M20 20h12M20 25h20"/><circle cx="47" cy="19" r="4"/></svg>;
const LiveConstructionAnimation = () => (
  <svg className="live-build" viewBox="0 0 640 430" role="img" aria-label="ক্রেন দিয়ে ধাপে ধাপে ভবন নির্মাণ হচ্ছে">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dff5ff"/><stop offset="1" stopColor="#fff"/></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#34b7e9"/><stop offset="1" stopColor="#0d347f"/></linearGradient>
      <filter id="shadow"><feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity=".18"/></filter>
    </defs>
    <rect width="640" height="430" fill="url(#sky)"/>
    <g className="blueprint-lines" fill="none" stroke="#79bde1" strokeWidth="2" strokeDasharray="8 8">
      <path d="M35 366 310 225l290 142-280 48Z"/><path d="m103 365 253-109M180 390l253-108M465 300v94M350 256v139"/>
    </g>
    <circle className="sun-pulse" cx="535" cy="82" r="38" fill="#f5bd18" opacity=".88"/>
    <g className="crane-scene" stroke="#101e58" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M90 330V65M66 330h50M90 65h385M90 65l52 45M130 65l-40 52" fill="none"/>
      <path d="M105 92h350M122 92l42-27m0 27 42-27m0 27 42-27m0 27 42-27m0 27 42-27m0 27 42-27m0 27 42-27" fill="none" strokeWidth="3"/>
    </g>
    <g className="moving-trolley">
      <rect x="288" y="54" width="32" height="22" rx="4" fill="#ac2b2c"/>
      <path className="cable" d="M304 76v115" stroke="#101e58" strokeWidth="3"/>
      <path d="M295 188q9 17 18 0" fill="none" stroke="#101e58" strokeWidth="5" strokeLinecap="round"/>
      <rect className="lift-block" x="280" y="163" width="48" height="25" rx="3" fill="#f5bd18" stroke="#fff" strokeWidth="3"/>
    </g>
    <g className="building" filter="url(#shadow)">
      <path d="M225 380V176h235v204Z" fill="#fff" stroke="#101e58" strokeWidth="6"/>
      <g className="floor floor-1"><rect x="245" y="306" width="195" height="62" fill="#edf4f8"/><rect x="268" y="320" width="55" height="35" rx="2" fill="url(#glass)"/><rect x="350" y="320" width="66" height="35" rx="2" fill="url(#glass)"/></g>
      <g className="floor floor-2"><rect x="245" y="239" width="195" height="62" fill="#e8f1f6"/><rect x="268" y="252" width="55" height="35" rx="2" fill="url(#glass)"/><rect x="350" y="252" width="66" height="35" rx="2" fill="url(#glass)"/></g>
      <g className="floor floor-3"><rect x="245" y="176" width="195" height="58" fill="#f4f8fb"/><rect x="268" y="188" width="55" height="33" rx="2" fill="url(#glass)"/><rect x="350" y="188" width="66" height="33" rx="2" fill="url(#glass)"/></g>
      <path d="M212 176h260v18H212z" fill="#ac2b2c"/><path d="M245 301h195M245 234h195" stroke="#f5bd18" strokeWidth="7"/>
    </g>
    <g className="status-pill"><rect x="438" y="345" width="165" height="48" rx="24" fill="#101e58"/><circle cx="462" cy="369" r="8" fill="#39d98a"/><text x="480" y="376" fill="#fff" fontFamily="Hind Siliguri" fontSize="20">নির্মাণ চলছে</text></g>
  </svg>
);
const icons = { roof: RoofIcon, engineer: FaUserTie, mosque: FaMosque, phone: FaPhoneAlt, call: MdCall, whatsapp: FaWhatsapp, location: FaMapMarkerAlt, blueprint: BlueprintIcon };
document.querySelectorAll('[data-icon]').forEach((node) => { const Icon = icons[node.dataset.icon]; if (Icon) createRoot(node).render(<Icon aria-hidden="true" />); });
const animationRoot = document.querySelector('#live-construction-animation');
if (animationRoot) createRoot(animationRoot).render(<LiveConstructionAnimation />);

const interiorIcons = [MdDesignServices, GiPaintRoller, TbHomeCog, MdOutlineEngineering, LuClipboardCheck, TbRulerMeasure, BsBadge3D];
const constructionIcons = [TbBuildingSkyscraper, MdArchitecture, GiElectricalResistance, GiWaterDrop, TbRulerMeasure, HiOutlineCubeTransparent, GiGroundbreaker, GiModernCity];
function addServiceIcons(selector, iconSet) {
  document.querySelectorAll(selector).forEach((item, index) => {
    const holder = document.createElement('span'); holder.className = 'service-icon'; item.prepend(holder);
    const Icon = iconSet[index]; createRoot(holder).render(<Icon aria-hidden="true" />);
  });
}
addServiceIcons('.interior .service-list li', interiorIcons);
addServiceIcons('.construction-list li', constructionIcons);

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); links.classList.toggle('open'); });
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => { links.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
document.querySelector('#year').textContent = new Date().getFullYear();
