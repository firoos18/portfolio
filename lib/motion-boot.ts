/** Runs before first paint: hide reveal targets only when motion is allowed, and undo it if the island never mounts. */
export const motionBootScript = `(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion')},3000)})();`;
