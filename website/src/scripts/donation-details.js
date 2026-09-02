export function initializeDonationDetails() {
    const toggle = document.querySelector("#bank-toggle");
    const details = document.querySelector("#bank-details");

    if (!(toggle instanceof HTMLButtonElement) || !(details instanceof HTMLElement)) {
        return;
    }

    toggle.addEventListener("click", () => {
        const shouldShow = details.hidden;

        details.hidden = !shouldShow;
        toggle.textContent = shouldShow
            ? "Hide bank details"
            : "Show bank details";
    });
}
