document.getElementById('ym-notification').style.bottom = '198p';
var observer = new MutationObserver(function(mutations) {
    document.getElementById('ym-notification').style.bottom = '198p'; 
});
var target = document.getElementById('ym-notification');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });