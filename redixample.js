<script>
    (function() {
        const detectDevTools = () => {
            if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
                debugger;
                window.location.replace("https://www.googe.com"); // Redirect when DevTools are open
            }
        };
        setInterval(detectDevTools, 100);
    })();
</script>
