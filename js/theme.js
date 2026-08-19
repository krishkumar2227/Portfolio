(() => {

    const root = document.documentElement;

    const toggle =
        document.querySelector("[data-theme-toggle]");

    if (!toggle) {
        return;
    }

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {

        root.setAttribute(
            "data-theme",
            savedTheme
        );
    }

    function updateButton() {

        const isDark =
            root.getAttribute("data-theme") === "dark";

        toggle.setAttribute(
            "aria-pressed",
            String(isDark)
        );

        toggle.textContent =
            isDark ? "☀ Light" : "☾ Dark";
    }

    toggle.addEventListener("click", () => {

        const current =
            root.getAttribute("data-theme");

        const systemDark =
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

        const next =
            current
                ? current === "dark"
                    ? "light"
                    : "dark"
                : systemDark
                    ? "light"
                    : "dark";

        root.setAttribute(
            "data-theme",
            next
        );

        localStorage.setItem(
            "portfolio-theme",
            next
        );

        updateButton();
    });

    updateButton();

})();
